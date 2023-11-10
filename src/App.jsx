import { useState } from 'react';
import './styles/App.css';
import GeneralForm from './components/GeneralForm';
import EducationalForm from './components/EducationalForm';
import PracticalForm from './components/PracticalForm';
import CV from './components/CV';
import {
  BackIcon,
  DummyDataIcon,
  RefreshIcon,
  ShowSidebarIcon,
  ThemeIcon,
} from './utils/icons';
import ThemeSettings from './components/ThemeSettings';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const [sidebarIsMounted, setSidebarIsMounted] = useState(false);

  const [generalInfo, setGeneralInfo] = useState(getGeneralInfoFromStorage);
  const [educationalExperience, setEducationalExperience] = useState(
    getEducationalXPFromStorage
  );
  const [workExperience, setWorkExperience] = useState(getWorkXPFromStorage);

  function getGeneralInfoFromStorage() {
    let storedInfo = localStorage.getItem('generalInfo');
    if (storedInfo === null) {
      return { name: '', email: '', phoneNumber: '' };
    } else {
      return JSON.parse(storedInfo);
    }
  }

  function getEducationalXPFromStorage() {
    let storedInfo = localStorage.getItem('eduXP');
    if (storedInfo === null) {
      return [];
    } else {
      return JSON.parse(storedInfo);
    }
  }

  function getWorkXPFromStorage() {
    let storedInfo = localStorage.getItem('workXP');
    if (storedInfo === null) {
      return [];
    } else {
      return JSON.parse(storedInfo);
    }
  }

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
    updateGeneralInfo({
      name: 'Test Tester',
      email: 'test.tester@test.com',
      phoneNumber: '123-456 789',
    });
    updateEducationalXP([
      {
        id: 1,
        schoolName: 'Test School',
        typeOfEducation: 'University',
        honors: 'Magna Cum Laude',
        startDate: '2021',
        endDate: '2023',
        hidden: false,
      },
      {
        id: 2,
        schoolName: 'Test High School',
        typeOfEducation: 'High School',
        honors: '',
        startDate: '2017',
        endDate: '2021',
        hidden: true,
      },
    ]);
    updateWorkXP([
      {
        id: 1,
        companyName: 'Test Company Inc.',
        jobDescription: 'Tester',
        details:
          'Tested tests, did some work here and there, tested some more, and then tested again.',
        startDate: '2023',
        endDate: 'Today',
        hidden: true,
      },
      {
        id: 2,
        companyName: 'Test Company Inc.',
        jobDescription: 'Tester',
        details: '',
        startDate: '2019',
        endDate: '2023',
        hidden: false,
      },
    ]);
  };

  const toggleSidebar = () => {
    setSidebarIsMounted(!sidebarIsMounted);
    if (!showSidebar) {
      setShowSidebar(true);
      setTimeout(() => {
        document.querySelector('.formSection').classList.add('active');
      }, 1); // Add the class after a small delay to trigger the animation
    } else {
      document.querySelector('.formSection').classList.remove('active');
      setTimeout(() => {
        setShowSidebar(false);
      }, 300);
    }
  };

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
                updateEducationalXP={updateEducationalXP}
              />
              <PracticalForm
                workExperience={workExperience}
                updateWorkXP={updateWorkXP}
              />
            </>
          ) : (
            <div>
              <ThemeSettings />
            </div>
          )}
        </div>
      )}

      <div className="CVSection">
        <CV
          generalInfo={generalInfo}
          educationalExperience={educationalExperience}
          workExperience={workExperience}
        />
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
