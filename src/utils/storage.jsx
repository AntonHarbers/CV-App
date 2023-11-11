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

export {
  getGeneralInfoFromStorage,
  getEducationalXPFromStorage,
  getWorkXPFromStorage,
};
