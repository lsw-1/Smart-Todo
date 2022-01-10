import { ethers } from "ethers";
import Button from "https://framer.com/m/button-vlMc.js@q3t5pIcNBXry1ShloyxA";
import TaskItem from "https://framer.com/m/TaskItem-rhHA.js@DFYHJPZno8Uh6e69ZFqr";
import { useCallback, useEffect, useState } from "react";
import { match } from "ts-pattern";
import { TodoList__factory } from "../types/ethers-contracts";

import styles from "../styles/Home.module.css";
import type { TodoItemStruct } from "../types/ethers-contracts/TodoList";

type Status = "connect-wallet" | "ready";
const TODO_LIST_ADDRESS = "0x687543a4a272287741E6758153AfB4e2836D205A";

const Home = () => {
  const [currAcc, setCurrAcc] = useState("");
  const [newTask, setNewTask] = useState<{ title: string; amount: string }>({
    title: "",
    amount: "",
  });
  const [status, setStatus] = useState<Status>("connect-wallet");
  const [list, setList] = useState<TodoItemStruct[]>([]);
  const [isEditing, toggleEditing] = useState<boolean>(false);

  const todoList = useCallback(() => {
    const provider = () => new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider().getSigner();
    return new TodoList__factory().connect(signer).attach(TODO_LIST_ADDRESS);
  }, []);

  const addTodo = async () => {
    const tx = await todoList().createTodo(newTask.title, {
      value: ethers.utils.parseEther(newTask.amount),
    });
    await tx.wait();
    todoList().on("TodoCreated", async (event) => {
      setList(await todoList().fetchUnfinishedTodos());
    });
  };

  const connectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("get MetaMask");
    }

    try {
      const acc = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrAcc(acc[0]);
      setStatus("ready");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    hasWallet();
  }, []);

  const hasWallet = () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure to use Metamask");
      return;
    }
    ethereum.request({ method: "eth_accounts" }).then((acc: string[]) => {
      if (acc.length !== 0) {
        setCurrAcc(acc[0]);
        setStatus("ready");
        todoList()
          .fetchUnfinishedTodos()
          .then((todos) => {
            setList(todos);
            console.log(todos);
          });
      }
    });
  };

  return (
    <div className={styles.container}>
      {match(status)
        .with("connect-wallet", () => (
          <div className={styles.container}>
            <h1>TodoList</h1>
            <Button onClick={connectWallet}>Connect Wallet</Button>
          </div>
        ))
        .with("ready", () => (
          <div className={styles.list}>
            <h1>TodoList</h1>
            {list.map((item) => (
              <TaskItem
                tap={() => {
                  todoList().completeTodo(item.todoId);
                }}
                key={item.title}
                title={item.title}
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
                title="Add Task"
                tap={() => {
                  toggleEditing(true);
                }}
              />
            )}
          </div>
        ))
        .exhaustive()}
    </div>
  );
};

export default Home;
