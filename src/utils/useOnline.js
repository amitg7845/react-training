import { useState, useEffect } from "react";

function useOnline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    //It is used to set up event listeners when the component mounts. And changes the online status accordingly.
    window.addEventListener("online", () => {
      console.log("ONLINE");

      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      console.log("OFFLINE");
      setIsOnline(false);
    });
  }, []);
  return isOnline;
}

export default useOnline;
