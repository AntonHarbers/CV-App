const dummyWorkData = [
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
];

const dummyEducationData = [
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
];

const dummyGeneralData = {
  name: 'Test Tester',
  email: 'test.tester@test.com',
  phoneNumber: '123-456 789',
};

const emptyEducationItem = (id) => {
  return {
    id: id,
    schoolName: '',
    honors: '',
    startDate: '',
    endDate: '',
    typeOfEducation: '',
  };
};

const emptyWorkItem = (id) => {
  return {
    id: id,
    companyName: '',
    jobDescription: '',
    details: '',
    startDate: '',
    endDate: '',
  };
};

export {
  dummyWorkData,
  dummyEducationData,
  dummyGeneralData,
  emptyEducationItem,
  emptyWorkItem,
};
