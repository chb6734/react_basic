import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  //   const [person, setPerson] = useState(initialperson);
  const [person, dispatch] = useReducer(personReducer, initialperson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇을 바꾸고 싶은가요?`);

    if (prev != current) {
      dispatch({ type: "updated", prev, current });
    }
  };
  const handleDelete = () => {
    const prev = prompt(`누구의 이름을 삭제하고싶나요?`);
    dispatch({ type: "deleted", prev });
  };
  const handelAdd = () => {
    const mentoNm = prompt(`이름을 입력하세요`);
    const mentoTitle = prompt(`타이틀을 입력하세요`);
    dispatch({ type: "added", mentoNm, mentoTitle });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handelAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialperson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
