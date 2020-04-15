import { useContext } from "react";
import ToastContext from "./context";

function useToast() {
  const context = useContext(ToastContext);

  return {
    info: context.info,
    success: context.success,
    error: context.error,
    warning: context.warning,
    remove: context.remove,
  };
}

export default useToast;
