import { useLayoutEffect, useState } from "react";

const Test1 = () => {
  const [message, setMessage] = useState<string>("message 1");

  useLayoutEffect(() => {
    setTimeout(() => {
      setMessage("message 2");
    }, 2000);
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Test1;
