import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import "../styles.css";
import QuestButton from "./QuestButton";
import db from "../firebase";

export default function Question() {
  const [loading, setLoading] = useState(false);

  const [question, setQuestion] = useState({
    title: "Aucune question en cours !",
    resA: "",
    resB: "",
    resC: "",
    resD: "",
    question: "0"
  });

  // fonction de récupération de la question en cours
  async function getData() {
    const docRef = doc(db, "question", "epCRtbb28VMXeDEvrxtq");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const getQuest = docSnap.data();
      setQuestion(getQuest);
    } else {
      console.log("Aucune question en cours !");
    }
  }

  useEffect(() => {
    setInterval(() => {
      setLoading(true);
      getData();
    }, 6000);
    setLoading(false);
  }, [loading]);

  return (
    <div className="form">
      <h1>{question.title}</h1>
      {question.title === "Aucune question en cours !" ? (
        ""
      ) : (
        <QuestButton question={question} />
      )}
    </div>
  );
}
