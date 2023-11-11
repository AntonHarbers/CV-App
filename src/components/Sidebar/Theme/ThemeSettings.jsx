import '../../../styles/ThemeSettings.css';
import {
  DarkModeIcon,
  LeftThemeIcon,
  LighModeIcon,
  RightThemeIcon,
  UpThemeIcon,
} from '../../../utils/icons';

export default function ThemeSettings({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    console.log('yes');
    setDarkMode(!darkMode);
  };

  return (
    <div className="themeFormContainer">
      <h2>Theme Settings</h2>

      <div className="themeFormRow">
        <button>{LeftThemeIcon()}</button>
        <button>{UpThemeIcon()}</button>
        <button>{RightThemeIcon()}</button>
      </div>
      <div className="themeFormRow">
        <label htmlFor="mainColor">Color 1</label>
        <input type="color" name="mainColor" id="mainColor" />
      </div>
      <div className="themeFormRow">
        <label htmlFor="secondaryColor">Color 2</label>
        <input type="color" name="mainColor" id="mainColor" />
      </div>
      <div className="themeFormRow">
        <button onClick={toggleDarkMode}>
          {darkMode ? LighModeIcon() : DarkModeIcon()}
        </button>
      </div>
    </div>
  );
}
