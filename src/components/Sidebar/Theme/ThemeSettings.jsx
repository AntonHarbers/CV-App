import '../../../styles/ThemeSettings.css';
import {
  LeftThemeIcon,
  RightThemeIcon,
  UpThemeIcon,
} from '../../../utils/icons';

export default function ThemeSettings({
  colors,
  updateColorScheme,
  headerPosition,
  setHeaderPosition,
}) {
  return (
    <div className="themeFormContainer">
      <h2>Theme Settings</h2>

      <div className="themeFormRow">
        <button
          style={{ color: headerPosition == 0 ? '#ffffff' : '#000000' }}
          onClick={() => setHeaderPosition(0)}
        >
          {LeftThemeIcon()}
        </button>
        <button
          style={{ color: headerPosition == 1 ? '#ffffff' : '#000000' }}
          onClick={() => setHeaderPosition(1)}
        >
          {UpThemeIcon()}
        </button>
        <button
          style={{ color: headerPosition == 2 ? '#ffffff' : '#000000' }}
          onClick={() => setHeaderPosition(2)}
        >
          {RightThemeIcon()}
        </button>
      </div>
      <div className="themeFormRow">
        <label htmlFor="mainColor">Main Color</label>
        <input
          type="color"
          name="mainColor"
          value={colors.mainColor}
          onChange={(e) => updateColorScheme(1, e.target.value)}
          id="mainColor"
        />
      </div>
      <div className="themeFormRow">
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          type="color"
          name="backgroundColor"
          value={colors.backgroundColor}
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
          value={colors.textColor}
          onChange={(e) => {
            updateColorScheme(3, e.target.value);
          }}
          id="secondaryColor"
        />
      </div>
    </div>
  );
}
