import { useRef } from 'react';
import './styles/App.css';
import { useReactToPrint } from 'react-to-print';
import GeneralForm from './components/Sidebar/Forms/GeneralForm';
import EducationalForm from './components/Sidebar/Forms/EducationalForm';
import PracticalForm from './components/Sidebar/Forms/PracticalForm';
import CV from './components/CV';
import {
  BackIcon,
  DummyDataIcon,
  PDFIcon,
  RefreshIcon,
  ShowSidebarIcon,
  ThemeIcon,
} from './utils/icons';
import ThemeSettings from './components/Sidebar/Theme/ThemeSettings';

import {
  dummyEducationData,
  dummyGeneralData,
  dummyWorkData,
} from './utils/data';
import {
  backgroundColor,
  educationalExperience,
  generalInfo,
  mainColor,
  showForms,
  showSidebar,
  sidebarIsMounted,
  textColor,
  workExperience,
} from './utils/signals';

function App() {
  const toggleForms = () => {
    showForms.value = !showForms.value;
  };

  const updateColorScheme = (colorInt, color) => {
    if (colorInt == 1) {
      mainColor.value = color;
    } else if (colorInt == 2) {
      backgroundColor.value = color;
    } else {
      textColor.value = color;
    }
  };

  const resetData = () => {
    generalInfo.value = { name: '', email: '', phoneNumber: '' };
    educationalExperience.value = [];
    workExperience.value = [];
  };

  const dummyData = () => {
    generalInfo.value = dummyGeneralData;
    educationalExperience.value = dummyEducationData;
    workExperience.value = dummyWorkData;
  };

  const toggleSidebar = () => {
    sidebarIsMounted.value = !sidebarIsMounted.value;
    if (!showSidebar.value) {
      showSidebar.value = true;
      setTimeout(() => {
        document.querySelector('.formSection').classList.add('active');
      }, 100);
    } else {
      document.querySelector('.formSection').classList.remove('active');
      setTimeout(() => {
        showSidebar.value = false;
      }, 300);
    }
  };

  const cvRef = useRef();
  const handlePDFPrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: 'CV Maker - CV',
  });

  return (
    <div className="container">
      {showSidebar.value && (
        <div
          className={`formSection ${
            !sidebarIsMounted ? 'formSection-exit' : 'formSection-enter'
          }`}
        >
          <div className="sidebarHeader">
            <button onClick={toggleSidebar}>{BackIcon()}</button>
            <button onClick={resetData}>{RefreshIcon()}</button>
            <button onClick={dummyData}>{DummyDataIcon()}</button>
            <button
              onClick={toggleForms}
              style={{ color: !showForms.value ? 'white' : null }}
            >
              {ThemeIcon()}
            </button>
          </div>
          {showForms.value ? (
            <>
              <GeneralForm />
              <EducationalForm />
              <PracticalForm />
            </>
          ) : (
            <div>
              <ThemeSettings updateColorScheme={updateColorScheme} />
            </div>
          )}
        </div>
      )}

      <div className="CVSection">
        <CV ref={cvRef} />
        <button onClick={handlePDFPrint} className="pdfButton">
          {PDFIcon()}
        </button>

        {!showSidebar.value && (
          <button onClick={toggleSidebar} className="editButton">
            {ShowSidebarIcon()}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
