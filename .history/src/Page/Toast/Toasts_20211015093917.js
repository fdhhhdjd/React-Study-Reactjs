import { useState } from "react";
import Button from "./buttonToast";
import Toast from "./Toast";
import styles from "./Toasts.css";

function Toasts() {
  return (
    <>
      <h1>React Toast Component</h1>
      <div>
        <Button handleClick={() => showToast("success")}>Success</Button>
        <Button handleClick={() => showToast("danger")}>Danger</Button>
        <Button handleClick={() => showToast("info")}>Info</Button>
        <Button handleClick={() => showToast("warning")}>Warning</Button>
      </div>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
    </>
  );
}

export default Toasts;
