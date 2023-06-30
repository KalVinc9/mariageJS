import "../styles.css";
import profile from "../assets/profile.png";

export default function Form({ file, handleChange, handleNew, setInputUser }) {
  return (
    <div className="form">
      <h1>Mariage de Salomé & Jean</h1>
      <p>
        Cliquez sur l'image et prenez-vous en photo avec votre meilleure grimace
        !
      </p>
      <div className={file ? "picture" : "picture active"}>
        <input
          id="capture-user"
          type="file"
          accept="image/jpg,image/jpeg"
          onChange={(e) => handleChange(e)}
          capture="user"
          style={{
            position: "absolute",
            borderRadius: "999px",
            width: "100%",
            height: "100%",
            opacity: 0,

            zIndex: 100
          }}
        />

        {file ? (
          <img src={file} className="preview" alt="original" />
        ) : (
          <img src={profile} className="preview" alt="profile" />
        )}
      </div>

      <p>Entrez votre prénom</p>
      <input
        type="text"
        className="inputNew"
        placeholder="Votre prénom"
        onChange={(e) => setInputUser(e.target.value)}
      />
      <button className="valider" onClick={handleNew}>
        OK
      </button>
    </div>
  );
}
