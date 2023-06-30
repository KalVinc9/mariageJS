import "./styles.css";
import { useState } from "react";

//import base de données
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import db from "./firebase";

//fond d'écran
import bg from "./assets/bg.png";

//import des composants
import Question from "./component/Question";
import Form from "./component/Form";

//import des fonctions
import requestCameraDevices from "./functions/requestCameraDevices";
import ConvertBase64 from "./functions/ConvertBase64";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [fileImage, setFileImage] = useState("");
  const [photo, setPhoto] = useState("");
  const connectedUser = localStorage.getItem("mariage");

  //enregistrement nouvel utilisateur
  const handleNew = async () => {
    if (!inputUser) return alert("T'as pas de prénom bon dieu !");
    if (!fileImage) return alert("C'est pas compliqué de prendre une photo !");

    const collectionRef = collection(db, "users");
    const payload = { name: inputUser, images: "" };
    const docRef = await addDoc(collectionRef, payload);

    if (photo == null) return;
    const storage = getStorage();
    const storageRef = ref(storage, docRef.id);
    setCurrentUser(docRef.id);
    uploadBytes(storageRef, photo)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((downloadURL) => {
        const updateRef = doc(db, "users", docRef.id);

        updateDoc(updateRef, {
          images: downloadURL
        });
      });

    localStorage.setItem("mariage", JSON.stringify(currentUser));
  };

  //convertion image
  const handleChange = async (event) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      console.log(file);
      const fileData = await (<ConvertBase64 file={fileImage} />);
      setFileImage(fileData);
      setPhoto(file);
      console.log(file);
    }
  };

  requestCameraDevices();

  return (
    <div className="App">
      <img className="backgroundImage" src={bg} alt="bg" />
      {connectedUser ? (
        <Question />
      ) : (
        <Form
          file={fileImage}
          handleNew={handleNew}
          setInputUser={setInputUser}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}
