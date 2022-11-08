import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../module/memos";

const Memo = () => {
  const [name, setName] = useState("");
  const [text, setTest] = useState("");

  // 값을 모든 컴포넌트에서 사용 (자주 바뀌지 않게)
  //리듀서를 이용한 화면 데이터 제어
  // useSelelctor가 가져온 값은 dispatch가 일어나면 다시 가져온다
  const memoList = useSelector(state => state.memoList);
  const dispatch = useDispatch();

  const addMemo = e => {
    e.preventDefault();
    dispatch(
      addmemo({
        date: new Date(),
        name: name,
        text: text,
      })
    );
  };
  return (
    <div>
      <h1>방명록을 작성해주세요 </h1>
      <hr />
      <form onSubmit={addMemo}>
        <label htmlFor="">이름</label>
        <input
          type="text"
          size={5}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={e => {
            setTest(e.target.value);
          }}
        />
        <input type="submit" value="작성" />
      </form>
      <hr />
      <ul>
        {memoList.map(memo => (
          <li>
            {memo.name} : {memo.text} {memo.date.getMonth() + 1}/
            {memo.date.getDate()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memo;
