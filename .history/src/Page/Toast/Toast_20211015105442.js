import { useCallback } from "react";
import { useEffect } from "react/cjs/react.development";
import "./toast.css";

const Toast = ({ toastlist, position, setList }) => {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <>
      <div id="toast">
        {toastlist.map((toast, i) => (
          <div key={i}>
            <div className={`toast ${toast.backgroundColor}`}>
              <div className="toast__icon">
                <div className="toast__icon">
                  <i ref={json}></i>
                </div>
              </div>
              <div className="toast__body">
                <h3 className="toast__title ">{toast.title}</h3>
                <p className="toast__msg">{toast.description}</p>
              </div>
              <div className="toast__close">
                <i
                  className="fa fa-times"
                  onClick={() => deleteToast(toast.id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast;
