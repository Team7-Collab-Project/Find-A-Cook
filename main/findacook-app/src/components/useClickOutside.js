import { useEffect } from "react";

const useClickOutside = (ref, handler, isOpen) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    if (isOpen) {
      document.addEventListener("click", listener);
    }
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler, isOpen]);
};

export default useClickOutside;