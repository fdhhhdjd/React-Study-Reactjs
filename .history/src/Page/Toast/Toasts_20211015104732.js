import { useState } from "react";
import Button from "./buttonToast";
import Toast from "./Toast";
import "./Toasts.css";
import lottie from "lottie-web";
function Toasts() {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "Thành công ",
          backgroundColor: "toast--success",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "Thất bại",
          backgroundColor: "toast--error",
          button: "btn btn--success",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "Khá thành công",
          backgroundColor: "toast--info",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "Gần thất bại",
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
        <Button handleClick={() => showToast("info")} btn=" btn btn--info">
          Info
        </Button>
        <Button handleClick={() => showToast("warning")} btn=" btn btn--warn">
          Warning
        </Button>
      </div>
      <Toast toastlist={list} setList={setList} />
    </div>
  );
}

export default Toasts;
