import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./styles/App.css";
import GeneralForm from "./components/GeneralForm";
import EducationalForm from "./components/EducationalForm";
import PracticalForm from "./components/PracticalForm";
import CV from "./components/CV";

const dummyEducationItem = {
  schoolName: "JIS",
  startDate: Date.now(),
  endDate: Date.now(),
  typeOfEducation: "High School",
  id: uuidv4(),
}
const dummyEducationItem1 = {
  schoolName: "DIS",
  startDate: Date.now(),
  endDate: Date.now(),
  typeOfEducation: "Middle School",
  id: uuidv4(),
}

const dummyWorkItem = {
  companyName: "GIZ",
  startDate: Date.now(),
  endDate: Date.now(),
  jobDesc: "Junior Finance Manager",
  id: uuidv4(),
}

const dummyWorkItem1 = {
  companyName: "GIZ",
  startDate: Date.now(),
  endDate: Date.now(),
  jobDesc: "Sachbearbeiter Kalkulation",
  id: uuidv4(),
}

function App() {
  const [formsHidden, setFormsHidden] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({name: "", email: "", phoneNumber: ""})
  const [educationalExperience, setEducationalExperience] = useState([dummyEducationItem, dummyEducationItem1]);
  const [workExperience, setWorkExperience] = useState([dummyWorkItem, dummyWorkItem]);

  const toggleForms = () => {
    setFormsHidden(!formsHidden)
  }

  useEffect(() => {
    console.log(generalInfo.name);
  }, [generalInfo.name]);
  return (
    <div className="container">
      {!formsHidden && (
        <div className="formSection">
          <GeneralForm
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
          <EducationalForm 
            educationalExperience={educationalExperience}
            setEducationalExperience={setEducationalExperience}
          />
          <PracticalForm 
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
          />
          <button onClick={toggleForms}>
            Submit
          </button>
        </div>
      )}

      <div className="CVSection">
        <CV 
          generalInfo={generalInfo}
          educationalExperience={educationalExperience}
          workExperience={workExperience}
        />
        {formsHidden && 
                <button onClick={toggleForms}>
                  Edit
                </button>
        }

      </div>
    </div>
  );
}

export default App;
