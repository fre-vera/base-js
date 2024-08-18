import { transformUser } from './transformUser.js';
import { testData } from './testData.js';

describe('transformUser:', () => {
  test('Unit test 1', () => {
    const { inputUser, outputUser } = testData.test1;
    expect(outputUser).toEqual(transformUser(inputUser));
  });

  test('Unit test 2', () => {
    const { inputUser, outputUser } = testData.test2;
    expect(outputUser).toEqual(transformUser(inputUser));
  });

  test('Unit test 3', () => {
    const { inputUser, outputUser } = testData.test3;
    expect(outputUser).toEqual(transformUser(inputUser));
  });

  test('Unit test 4', () => {
    const { inputUser, outputUser } = testData.test4;
    expect(outputUser).toEqual(transformUser(inputUser));
  });

  test('Unit test 5', () => {
    const { inputUser, outputUser } = testData.test5;
    expect(outputUser).toEqual(transformUser(inputUser));
  });
});
