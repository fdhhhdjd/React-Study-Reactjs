import { useState } from "react";
import Button from "./buttonToast";
import Toast from "./Toast";
import "./Toasts.css";

function Toasts() {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "toast--success",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          backgroundColor: "toast--error",
          button: "btn btn--success",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          backgroundColor: "toast--info",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "toast--warning",
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  return (
    <div>
      <h1>React Toast Component</h1>
      <div>
        <Button
          handleClick={() => showToast("success")}
          className="btn-success"
          btn=" btn btn--success"
        >
          Success
        </Button>
        <Button handleClick={() => showToast("danger")} btn=" btn btn--danger">
          Danger
        </Button>
        <Button handleClick={() => showToast("info")}>Info</Button>
        <Button handleClick={() => showToast("warning")} btn=" btn btn--warn">
          Warning
        </Button>
      </div>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
    </div>
  );
}

export default Toasts;
