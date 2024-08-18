/**
 * @typedef {import('./types').TestData} TestData
 */

/** @type {TestData} */
export const testData = {
  // adultUser
  test1: {
    inputUser: {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    },
    outputUser: {
      fullName: 'John Doe',
      ageInMonths: 300,
      isAdult: true,
    },
  },
  // minorUser
  test2: {
    inputUser: {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      age: 10,
    },
    outputUser: {
      fullName: 'Ivan Ivanov',
      ageInMonths: 120,
      isAdult: false,
    },
  },
  // eighteenYearUser
  test3: {
    inputUser: {
      firstName: 'Alisa',
      lastName: 'Petrova',
      age: 18,
    },
    outputUser: {
      fullName: 'Alisa Petrova',
      ageInMonths: 216,
      isAdult: true,
    },
  },
  // ageInMonths
  test4: {
    inputUser: {
      firstName: 'Alisa',
      lastName: 'Petrova',
      age: 20,
    },
    outputUser: {
      fullName: 'Alisa Petrova',
      ageInMonths: 240,
      isAdult: true,
    },
  },
  // emptyValue
  test5: {
    inputUser: {
      firstName: '',
      lastName: '',
      age: 20,
    },
    outputUser: {
      fullName: 'Alisa Petrova',
      ageInMonths: 240,
      isAdult: true,
    },
  },
};
