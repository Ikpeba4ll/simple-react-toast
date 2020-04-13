import React from "react";
import { useToast } from "./Toast";

function Child() {
  const toast = useToast();
  const showToast = () => {
    toast.add(
      [
        "Toast created from child component!sdhs sjd sdh sj sd sdjh sd  sdhj bdhjdhjd d jhdf djf djfdhjf d fjhf df jhdfh df ",
        "hello 2",
      ],
      "error"
    );
    toast.add("Toast 2!");
    toast.add("Toast 2!", "warning");
    setTimeout(() => toast.add("Toast 2!", "success"), 2000);
  };

  return (
    <>
      <button style={{ marginTop: 50 }} onClick={(e) => showToast()}>
        Show me a toast
      </button>
    </>
  );
}

export default Child;
