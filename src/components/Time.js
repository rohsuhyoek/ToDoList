import { useEffect, useState } from "react";

function Time() {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timeeee");
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("종료");
    };
  }, []);
  const StopButton = () => {
    setTime(0);
  };
  return (
    <div>
      <div>타이머</div>
      <p>{time}초</p>
      <button onClick={StopButton}>초기화</button>
    </div>
  );
}

export default Time;
