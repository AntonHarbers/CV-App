import { useState } from "react";
import "./styles/App.css";
import GeneralForm from "./components/GeneralForm";
import EducationalForm from "./components/EducationalForm";
import PracticalForm from "./components/PracticalForm";
import CV from "./components/CV";

function App() {
  const [formsHidden, setFormsHidden] = useState(false);
  const [generalInfo, setGeneralInfo] = useState(getGeneralInfoFromStorage)
  const [educationalExperience, setEducationalExperience] = useState(getEducationalXPFromStorage);
  const [workExperience, setWorkExperience] = useState(getWorkXPFromStorage);

  function getGeneralInfoFromStorage(){
    let storedInfo = localStorage.getItem('generalInfo');
    if(storedInfo === null){
      return {name: "", email: "", phoneNumber: ""}
    }else{
      return JSON.parse(storedInfo);
    }
  }

  function getEducationalXPFromStorage(){
    let storedInfo = localStorage.getItem('eduXP');
    if(storedInfo === null){
      return []
    }else{
      return JSON.parse(storedInfo)
    }
  }

  function getWorkXPFromStorage(){
    let storedInfo = localStorage.getItem('workXP');
    if(storedInfo === null) {
      return []
    }else{
      return JSON.parse(storedInfo)
    }
  }

  const updateGeneralInfo = (newInfo) => {
    setGeneralInfo(newInfo)
    localStorage.setItem('generalInfo', JSON.stringify(newInfo));
  }

  const updateEducationalXP = (eduXP) => {
    setEducationalExperience(eduXP)
    localStorage.setItem('eduXP', JSON.stringify(eduXP));
  }

  const updateWorkXP = (workXP) => {
    setWorkExperience(workXP);
    localStorage.setItem('workXP', JSON.stringify(workXP));
  }

  const toggleForms = () => {
    setFormsHidden(!formsHidden)
  }

  const resetData = () => {
    updateGeneralInfo({name: "", email: "", phoneNumber: ""})
    updateEducationalXP([]);
    updateWorkXP([]);
  }

  const dummyData = () => {
    updateGeneralInfo({name: "Test Tester", email: "test.tester@test.com", phoneNumber: "123-456 789"})
    updateEducationalXP([{
      id: 1,
      schoolName: "Test",
      typeOfEducation: "University",
      startDate: "2021",
      endDate: "2023"
    }])
    updateWorkXP([{
      id: 2,
      companyName: "Test",
      jobDescription: "Tester",
      startDate: '2023',
      endDate: "Today"
    }])
  }

  return (
    <div className="container">
      {!formsHidden && (
        <div className="formSection">
          <GeneralForm
            generalInfo={generalInfo}
            setGeneralInfo={updateGeneralInfo}
          />
          <EducationalForm 
            educationalExperience={educationalExperience}
            setEducationalExperience={updateEducationalXP}
          />
          <PracticalForm 
            workExperience={workExperience}
            setWorkExperience={updateWorkXP}
          />
          <button onClick={dummyData}>
            Dummy Data
          </button>
          <button onClick={resetData}>
            Reset Data
          </button>
          <button onClick={toggleForms}>
            Hide Sidebar
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
