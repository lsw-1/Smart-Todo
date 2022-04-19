import { BigNumber, BigNumberish, ethers, Signer } from "ethers";
import Button from "https://framer.com/m/button-vlMc.js@QqXPUYujrYSTur0ZBQZB";
import ConnectButton from "https://framer.com/m/ConnectButton-hZwk.js@5WIS86gv7HqixaiIF1Wy";
import TaskItem from "https://framer.com/m/TaskItem-rhHA.js@40N5yL4YHssDVmkb1FmN";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";
import { useAccount, useConnect, useContract, useContractRead } from "wagmi";
import { contractAddress } from "../config";
import styles from "../styles/Home.module.css";
import { TodoList, TodoList__factory } from "../typechain-types";
import type { TodoItemStruct } from "../types/ethers-contracts/TodoList";
import MM from "../components/MM";

// const TODO_LIST_ADDRESS = "0x687543a4a272287741E6758153AfB4e2836D205A";

const Home = () => {
  const [signer, setSigner] = useState<Signer>();
  const [newTask, setNewTask] = useState<{ title: string; amount: string }>({
    title: "",
    amount: "",
  });
  const [isEditing, toggleEditing] = useState<boolean>(false);

  const [{ data: connectData, loading: connectLoading }, connect] =
    useConnect();
  const [{ data: accountData }, disconnect] = useAccount({});

  const contract = useContract<TodoList>({
    addressOrName: contractAddress,
    contractInterface: TodoList__factory.abi,
    signerOrProvider: signer,
  });

  const [{ data: todosData, error, loading }, read] = useContractRead<TodoList>(
    {
      signerOrProvider: signer,
      addressOrName: contractAddress,
      contractInterface: TodoList__factory.abi,
    },
    "fetchUnfinishedTodos",
    {
      skip: !signer,
    }
  );

  const addTodo = async () => {
    const tx = await contract.createTodo(newTask.title, {
      value: ethers.utils.parseEther(newTask.amount.toString()),
    });
    await tx.wait();
    contract.on("TodoCreated", async (event) => {
      read();
    });
  };

  const handleComplete = async (id: BigNumberish) => {
    const tx = await contract.completeTodo(id);
    await tx.wait();
    contract.on("TodoCompleted", async (event) => {
      read();
    });
  };

  useEffect(() => {
    if (connectData.connector?.ready) {
      (async () => {
        const s = await connectData.connector?.getSigner();
        setSigner(s);
        read();
      })();
    }
  }, [connectData.connector]);

  return (
    <div className={styles.container}>
      {match([connectData.connected, connectLoading])
        .with([true, false], () => (
          <div className={styles.list}>
            <h1>TodoList</h1>
            <div>
              <div>
                {accountData?.ens?.name
                  ? `${accountData.ens?.name} (${accountData.address})`
                  : accountData?.address.slice(0, 8).concat("...")}
              </div>
              <div>Connected to {accountData?.connector?.name}</div>
              <MM />
              <button onClick={disconnect}>Disconnect</button>
            </div>
            {todosData?.map((item: TodoItemStruct) => (
              <TaskItem
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
              {connectData.connectors.map((connector) => (
                <ConnectButton
                  variant={connector.name}
                  key={connector.id}
                  onClick={() => connect(connector)}
                />
              ))}
            </div>
          </>
        ))}
    </div>
  );
};

export default Home;
