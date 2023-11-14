import '../../../styles/ThemeSettings.css';
import {
  LeftThemeIcon,
  RightThemeIcon,
  UpThemeIcon,
} from '../../../utils/icons';
import {
  backgroundColor,
  headerPosition,
  mainColor,
  textColor,
} from '../../../utils/signals';

export default function ThemeSettings({ updateColorScheme }) {
  return (
    <div className="themeFormContainer">
      <h2>Theme Settings</h2>

      <div className="themeFormRow">
        <button
          style={{ color: headerPosition.value == 0 ? '#ffffff' : '#000000' }}
          onClick={() => (headerPosition.value = 0)}
        >
          {LeftThemeIcon()}
        </button>
        <button
          style={{ color: headerPosition.value == 1 ? '#ffffff' : '#000000' }}
          onClick={() => (headerPosition.value = 1)}
        >
          {UpThemeIcon()}
        </button>
        <button
          style={{ color: headerPosition.value == 2 ? '#ffffff' : '#000000' }}
          onClick={() => (headerPosition.value = 2)}
        >
          {RightThemeIcon()}
        </button>
      </div>
      <div className="themeFormRow">
        <label htmlFor="mainColor">Main Color</label>
        <input
          type="color"
          name="mainColor"
          value={mainColor.value}
          onChange={(e) => updateColorScheme(1, e.target.value)}
          id="mainColor"
        />
      </div>
      <div className="themeFormRow">
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          type="color"
          name="backgroundColor"
          value={backgroundColor.value}
          onChange={(e) => {
            updateColorScheme(2, e.target.value);
          }}
          id="backgroundColor"
        />
      </div>
      <div className="themeFormRow">
        <label htmlFor="secondaryColor">Text Color</label>
        <input
          type="color"
          name="secondaryColor"
          value={textColor.value}
          onChange={(e) => {
            updateColorScheme(3, e.target.value);
          }}
          id="secondaryColor"
        />
      </div>
    </div>
  );
}
