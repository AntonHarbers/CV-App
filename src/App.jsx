import { useState, useEffect } from "react";
import "./styles/App.css";
import GeneralForm from "./components/GeneralForm";
import EducationalForm from "./components/EducationalForm";
import PracticalForm from "./components/PracticalForm";
import CV from "./components/CV";

function App() {
  const [formsHidden, setFormsHidden] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className="container">
      {!formsHidden && (
        <div className="formSection">
          <GeneralForm
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            setEmail={setEmail}
            setName={setName}
            setPhoneNumber={setPhoneNumber}
          />
          <EducationalForm />
          <PracticalForm />
          <button onClick={() => {
            setFormsHidden(true)
          }}>
            Submit
          </button>
        </div>
      )}

      <div className="CVSection">
        <CV />
        {formsHidden && 
                <button onClick={() => {
                  setFormsHidden(false)
                }}>
                  Edit
                </button>
        }

      </div>
    </div>
  );
}

export default App;
