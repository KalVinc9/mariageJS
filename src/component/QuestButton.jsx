import { useState } from "react";
import "../styles.css";

export default function QuestButton({ question }) {
  const [selectResponse, setSelectResponse] = useState("");

  const items = [
    {
      quest: question.resA,
      text: "resA"
    },
    {
      quest: question.resB,
      text: "resB"
    },
    {
      quest: question.resC,
      text: "resC"
    },
    {
      quest: question.resD,
      text: "resD"
    }
  ];

  return (
    <>
      {items.map((item) => (
        <button
          className="response"
          onChange={selectResponse === item.quest ? "" : setSelectResponse("")}
          onClick={() => setSelectResponse(item.text)}
          style={
            selectResponse === item.text
              ? { backgroundColor: "green" }
              : { backgroundColor: "" }
          }
          disabled={selectResponse === "" ? false : true}
        >
          {item.quest}
        </button>
      ))}
    </>
  );
}
