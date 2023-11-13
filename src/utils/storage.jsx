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

function getMainColorFromStorage() {
  let storedInfo = localStorage.getItem('mainColor');
  if (storedInfo === null) {
    return '#84dcc6';
  } else {
    return storedInfo;
  }
}

function getBackgroundColorFromStorage() {
  let storedInfo = localStorage.getItem('backgroundColor');
  if (storedInfo === null) {
    return '#ffffff';
  } else {
    return storedInfo;
  }
}

function getTextColorFromStorage() {
  let storedInfo = localStorage.getItem('textColor');
  if (storedInfo === null) {
    return '#222222';
  } else {
    return storedInfo;
  }
}

export {
  getGeneralInfoFromStorage,
  getEducationalXPFromStorage,
  getWorkXPFromStorage,
  getMainColorFromStorage,
  getBackgroundColorFromStorage,
  getTextColorFromStorage,
};
