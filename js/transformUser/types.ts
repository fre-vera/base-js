export type InputUser = {
  firstName: string;
  lastName: string;
  age: number;
};

export type OutputUser = {
  fullName: string;
  ageInMonths: number;
  isAdult: boolean;
};

type TestUnit = {
  inputUser: InputUser;
  outputUser: OutputUser;
};

export type TestData = {
  test1: TestUnit;
  test2: TestUnit;
  test3: TestUnit;
  test4: TestUnit;
  test5: TestUnit;
};
