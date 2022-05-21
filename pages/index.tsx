import { BigNumber, BigNumberish, ethers, Signer } from "ethers";
import Button from "https://framer.com/m/button-vlMc.js@QqXPUYujrYSTur0ZBQZB";
import ConnectButton from "https://framer.com/m/ConnectButton-hZwk.js@5WIS86gv7HqixaiIF1Wy";
import TaskItem from "https://framer.com/m/TaskItem-rhHA.js@40N5yL4YHssDVmkb1FmN";
import { useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import { match, __ } from "ts-pattern";
import {
  useProvider,
  Connector,
  useAccount,
  useConnect,
  useContract,
  useContractRead,
  useDisconnect,
  useNetwork,
  useSigner,
} from "wagmi";
import { contractAddress } from "../config";
import styles from "../styles/Home.module.css";
import MetamaskButton from "https://framer.com/m/MetamaskButton-uFjH.js@brBYAc8y4BnhgOjuCEOS";
import { TodoList, TodoList__factory } from "../typechain-types";

// const TODO_LIST_ADDRESS = "0x687543a4a272287741E6758153AfB4e2836D205A";

const Home = () => {
  const [state, setState] = useState<{
    address?: string;
    error?: Error;
    loading?: boolean;
  }>({});

  const { data: networkData } = useNetwork();
  const [newTask, setNewTask] = useState<{ title: string; amount: string }>({
    title: "",
    amount: "",
  });

  const [todos, setTodos] = useState<TodoList.TodoItemStruct[]>([]);
  const [isEditing, toggleEditing] = useState<boolean>(false);

  const { connectors, connectAsync } = useConnect();
  const { disconnect } = useDisconnect();

  const { data: accountData } = useAccount({
    onSuccess: (a) => {
      setState((p) => ({ ...p, address: a?.address }));
    },
  });
  const { data: signerData, refetch: getSigner } = useSigner();
  const contract = useContract<TodoList>({
    signerOrProvider: signerData ?? undefined,
    addressOrName: contractAddress,
    contractInterface: TodoList__factory.abi,
  });

  const addTodo = async () => {
    if (!signerData) await getSigner();

    const tx = await contract.createTodo(newTask.title, {
      value: ethers.utils.parseEther(newTask.amount.toString() ?? 0),
    });
    await tx.wait();
    contract.on("TodoCreated", async (event) => {
      const a = await contract.fetchUnfinishedTodos();
      setTodos(a);
    });
  };

  const signInSiwe = async (connector: Connector) => {
    try {
      const res = await connectAsync(connector);
      if (!res.account) throw new Error("Something went wrong");

      const nonceRes = await fetch("/api/nonce");
      const message = new SiweMessage({
        domain: window.location.host,
        address: res.account,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: res.chain?.id,
        nonce: await nonceRes.text(),
      });

      const signer = await connector.getSigner();
      const signature = await signer.signMessage(message.prepareMessage());

      const verifyRes = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, signature }),
      });
      if (!verifyRes.ok) throw new Error("Error verifying message");
      setState((x) => ({ ...x, address: res.account, loading: false }));
    } catch (error) {
      console.error(error);
      // @ts-ignore
      setState((x) => ({ ...x, error, loading: false }));
    }
  };

  const handleComplete = async (id: BigNumberish) => {
    const tx = await contract.completeTodo(id);
    await tx.wait();
    contract.on("TodoCompleted", async (event) => {
      const a = await contract.fetchUnfinishedTodos();
      setTodos(a);
    });
  };

  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch("/api/me");
        const json = await res.json();
        setState((x) => ({ ...x, address: json.address }));
      } finally {
        setState((x) => ({ ...x, loading: false }));
      }
    };
    // 1. page loads
    (async () => await handler())();

    // 2. window is focused (in case user logs out of another window)
    window.addEventListener("focus", handler);
    return () => window.removeEventListener("focus", handler);
  }, []);

  useEffect(() => {
    if (signerData) {
      (async () => {
        try {
          const res = await contract.fetchUnfinishedTodos();
          setTodos(res);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [signerData]);

  const signOut = async () => {
    await fetch("/api/logout");
    setState((x) => ({ ...x, address: undefined }));
    disconnect();
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        background: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.container}>
        {match(state.address)
          .with(__.string, () => (
            <div className={styles.list}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h1>TodoList</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {accountData?.address?.slice(0, 8).concat("...")}
                  <div
                    style={{
                      marginLeft: "12px",
                      backgroundColor: "#743AFC",
                      height: 40,
                      width: 40,
                      borderRadius: "100%",
                      cursor: "pointer",
                    }}
                    onClick={signOut}
                  />
                </div>
              </div>
              {todos?.map((item) => (
                <TaskItem
                  style={{
                    marginBottom: "12px",
                  }}
                  onClick={() => {
                    handleComplete(item.todoId);
                  }}
                  key={item.todoId}
                  title={item.title}
                  amount={1}
                />
              ))}
              {isEditing ? (
                <TaskItem
                  variant="edit"
                  onTitle={(title: string) => {
                    setNewTask((prev) => ({
                      ...prev,
                      title,
                    }));
                  }}
                  onAmount={(amount: string) => {
                    setNewTask((prev) => ({
                      ...prev,
                      amount,
                    }));
                  }}
                  onSubmit={() => {
                    addTodo();
                    toggleEditing(false);
                  }}
                />
              ) : (
                <Button
                  style={{
                    marginTop: "auto",
                  }}
                  title="Add Task"
                  tap={() => {
                    toggleEditing(true);
                  }}
                />
              )}
            </div>
          ))
          .otherwise(() => (
            <>
              <h1>TodoList</h1>
              <div
                style={{
                  display: "flex",
                  alignSelf: "stretch",
                }}
              >
                {connectors.map((connector) => {
                  return (
                    <div
                      style={{
                        marginRight: "12px",
                      }}
                      key={connector.id}
                    >
                      <ConnectButton
                        variant={connector.name}
                        onClick={() => signInSiwe(connector)}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Home;
