/**
 * @typedef {import('./types').InputUser} InputUser
 * @typedef {import('./types').OutputUser} OutputUser
 */

/**
 * @function transformUser
 * @param {InputUser} user
 * @returns {OutputUser}
 */

export const transformUser = (user) => ({
  fullName: `${user.firstName} ${user.lastName}`,
  ageInMonths: user.age * 12,
  isAdult: user.age >= 18,
});
