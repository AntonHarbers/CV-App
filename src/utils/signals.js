import { effect, signal } from '@preact/signals-react';
import {
  getBackgroundColorFromStorage,
  getEducationalXPFromStorage,
  getGeneralInfoFromStorage,
  getMainColorFromStorage,
  getTextColorFromStorage,
  getWorkXPFromStorage,
} from './storage';

const showSidebar = signal(false);
const showForms = signal(true);
const sidebarIsMounted = signal(false);
const generalInfo = signal(getGeneralInfoFromStorage());
const educationalExperience = signal(getEducationalXPFromStorage());
const workExperience = signal(getWorkXPFromStorage());
const mainColor = signal(getMainColorFromStorage());
const backgroundColor = signal(getBackgroundColorFromStorage());
const textColor = signal(getTextColorFromStorage());
// headerpositons: 0 = left, 1 = mid, 2 = right
const headerPosition = signal(1);

effect(() => {
  localStorage.setItem('mainColor', mainColor);
  localStorage.setItem('backgroundColor', backgroundColor);
  localStorage.setItem('textColor', textColor);
  localStorage.setItem('generalInfo', JSON.stringify(generalInfo));
  localStorage.setItem('eduXP', JSON.stringify(educationalExperience));
  localStorage.setItem('workXP', JSON.stringify(workExperience));
});

export {
  showSidebar,
  showForms,
  sidebarIsMounted,
  generalInfo,
  educationalExperience,
  workExperience,
  mainColor,
  backgroundColor,
  textColor,
  headerPosition,
};
