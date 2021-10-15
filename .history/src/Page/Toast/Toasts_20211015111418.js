import { useEffect, useRef, useState } from "react";
import Button from "./buttonToast";
import Toast from "./Toast";
import "./Toasts.css";
import lottie from "lottie-web";
function Toasts() {
  const [list, setList] = useState([]);
  let toastProperties = null;
  const success = useRef(null);
  const danger = useRef(null);
  const info = useRef(null);
  const warning = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: success.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./success.json"),
    });
    lottie.loadAnimation({
      container: danger.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./danger.json"),
    });
    lottie.loadAnimation({
      container: info.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./info.json"),
    });
    lottie.loadAnimation({
      container: warning.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./warning.json"),
    });
  }, [list]);
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "Thành công ",
          backgroundColor: "toast--success",
          json: success,
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "Thất bại",
          backgroundColor: "toast--error",
          button: "btn btn--success",
          json: danger,
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "Khá thành công",
          backgroundColor: "toast--info",
          json: info,
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "Gần thất bại",
          backgroundColor: "toast--warning",
          json: warning,
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
