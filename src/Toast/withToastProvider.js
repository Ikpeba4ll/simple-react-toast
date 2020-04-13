import React, { useMemo, useReducer } from "react";
import { createPortal } from "react-dom";

import ToastContext from "./context";
import Toast from "./Toast";
import "./style.css";
import todoReducer from "./todoReducer";

// Create a random ID
function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
}

function withToastProvider(Component) {
  function WithToastProvide(props) {
    const [toasts, dispatch] = useReducer(todoReducer, []);
    const add = (content, type = "info") => {
      if (typeof content === "object") {
        var data = content.map((item) => {
          return { id: generateUEID(), content: item, type };
        });

        dispatch({ type: "ADD", data });
      } else {
        const id = generateUEID();
        dispatch({ type: "ADD", data: [{ id, content, type }] });
      }

      console.log(toasts);
    };
    const remove = (id) => {
      dispatch({
        type: "REMOVE",
        id,
      });
    };
    const providerValue = useMemo(() => {
      return { add, remove };
    }, [toasts]);

    return (
      <ToastContext.Provider value={providerValue}>
        <Component {...props} />

        {createPortal(
          <div className="toasts-wrapper">
            {toasts.map((t) => (
              <Toast key={t.id} type={t.type} remove={() => remove(t.id)}>
                {t.content}
              </Toast>
            ))}
          </div>,
          document.body
        )}
      </ToastContext.Provider>
    );
  }

  return WithToastProvide;
}

export default withToastProvider;
