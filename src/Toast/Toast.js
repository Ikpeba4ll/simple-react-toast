import React, { useEffect, useRef } from "react";

function Toast({ children, remove, type }) {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 500000;
    const id = setTimeout(() => removeRef.current(), duration);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={`toast toast__${type}`}>
      <div className="toast__icon">
        <img src={require(`./assets/${type}.svg`)} alt="icon-type" />
      </div>
      <div className="toast__text">{children}</div>
      <div className="toast__close-div">
        <button onClick={remove} className="toast__close-btn">
          x
        </button>
      </div>
    </div>
  );
}

export default Toast;
