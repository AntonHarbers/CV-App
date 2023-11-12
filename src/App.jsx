import { useState, useRef } from 'react';
import './styles/App.css';
import { useReactToPrint } from 'react-to-print';
import GeneralForm from './components/Sidebar/Forms/GeneralForm';
import EducationalForm from './components/Sidebar/Forms/EducationalForm';
import PracticalForm from './components/Sidebar/Forms/PracticalForm';
import CV from './components/CV';
import {
  BackIcon,
  DummyDataIcon,
  RefreshIcon,
  ShowSidebarIcon,
  ThemeIcon,
} from './utils/icons';
import ThemeSettings from './components/Sidebar/Theme/ThemeSettings';
import {
  getEducationalXPFromStorage,
  getWorkXPFromStorage,
  getGeneralInfoFromStorage,
} from './utils/storage';
import {
  dummyEducationData,
  dummyGeneralData,
  dummyWorkData,
} from './utils/data';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showForms, setShowForms] = useState(true);
  const [sidebarIsMounted, setSidebarIsMounted] = useState(false);
  const [generalInfo, setGeneralInfo] = useState(getGeneralInfoFromStorage);
  const [educationalExperience, setEducationalExperience] = useState(
    getEducationalXPFromStorage
  );
  const [workExperience, setWorkExperience] = useState(getWorkXPFromStorage);
  const [darkMode, setDarkMode] = useState(true);

  const toggleForms = () => {
    setShowForms(!showForms);
  };

  const updateGeneralInfo = (newInfo) => {
    setGeneralInfo(newInfo);
    localStorage.setItem('generalInfo', JSON.stringify(newInfo));
  };

  const updateEducationalXP = (eduXP) => {
    setEducationalExperience(eduXP);
    localStorage.setItem('eduXP', JSON.stringify(eduXP));
  };

  const updateWorkXP = (workXP) => {
    setWorkExperience(workXP);
    localStorage.setItem('workXP', JSON.stringify(workXP));
  };

  const resetData = () => {
    updateGeneralInfo({ name: '', email: '', phoneNumber: '' });
    updateEducationalXP([]);
    updateWorkXP([]);
  };

  const dummyData = () => {
    updateGeneralInfo(dummyGeneralData);
    updateEducationalXP(dummyEducationData);
    updateWorkXP(dummyWorkData);
  };

  const toggleSidebar = () => {
    setSidebarIsMounted(!sidebarIsMounted);
    if (!showSidebar) {
      setShowSidebar(true);
      setTimeout(() => {
        document.querySelector('.formSection').classList.add('active');
      }, 1);
    } else {
      document.querySelector('.formSection').classList.remove('active');
      setTimeout(() => {
        setShowSidebar(false);
      }, 300);
    }
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container">
      {showSidebar && (
        <div
          className={`formSection ${
            !sidebarIsMounted ? 'formSection-exit' : 'formSection-enter'
          }`}
        >
          <div className="sidebarHeader">
            <button onClick={toggleSidebar}>{BackIcon()}</button>
            <button onClick={resetData}>{RefreshIcon()}</button>
            <button onClick={dummyData}>{DummyDataIcon()}</button>
            <button onClick={toggleForms}>{ThemeIcon()}</button>
          </div>
          {showForms ? (
            <>
              <GeneralForm
                generalInfo={generalInfo}
                updateGeneralInfo={updateGeneralInfo}
              />
              <EducationalForm
                educationalExperience={educationalExperience}
                setEducationalExperience={updateEducationalXP}
              />
              <PracticalForm
                workExperience={workExperience}
                setWorkExperience={updateWorkXP}
              />
            </>
          ) : (
            <div>
              <ThemeSettings darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          )}
        </div>
      )}

      <div className="CVSection">
        <CV
          ref={componentRef}
          generalInfo={generalInfo}
          educationalExperience={educationalExperience}
          workExperience={workExperience}
        />
        <button onClick={handlePrint}>Print this out!</button>

        {!showSidebar && (
          <button onClick={toggleSidebar} className="editButton">
            {ShowSidebarIcon()}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
