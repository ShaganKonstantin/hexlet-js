import _ from 'lodash';

const findLast = (arr) => {
  const result = _.last(arr);
  return result;
};
console.log(findLast([1, 2, 3]));

export default findLast;
