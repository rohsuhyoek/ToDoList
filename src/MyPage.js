import { useState } from "react";

// MyPage 컴포넌트
function MyPage() {
  const [up, setUp] = useState(1);
  const upButton = () => {
    setUp();
    console.log(up);
  };
  const downButton = () => {
    return <div>허벅지</div>;
  };
  return (
    <div>
      <h1>나의 루틴</h1>
      <button onClick={upButton}>상체</button>
      <button onClick={downButton}>하체</button>
    </div>
  );
}

export default MyPage;
