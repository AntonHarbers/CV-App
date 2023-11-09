import { useState } from 'react';
import './styles/App.css';
import GeneralForm from './components/GeneralForm';
import EducationalForm from './components/EducationalForm';
import PracticalForm from './components/PracticalForm';
import CV from './components/CV';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
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
        hidden: true,
      },
      {
        id: 2,
        schoolName: 'Test High School',
        typeOfEducation: 'High School',
        honors: '',
        startDate: '2017',
        endDate: '2021',
        hidden: false,
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

  const toggleForms = () => {
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
            <button onClick={toggleForms}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sidebarIcon"
              >
                <path
                  fillRule="evenodd"
                  d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={resetData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sidebarIcon"
              >
                <path
                  fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={dummyData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sidebarIcon"
              >
                <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
                  clipRule="evenodd"
                />
                <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
              </svg>
            </button>
          </div>
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
        </div>
      )}

      <div className="CVSection">
        <CV
          generalInfo={generalInfo}
          educationalExperience={educationalExperience}
          workExperience={workExperience}
        />
        {!showSidebar && (
          <button onClick={toggleForms} className="editButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="editIcon"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
