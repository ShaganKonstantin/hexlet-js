import _ from "lodash";

let findLast = (arr) => {
	let result = _.last(arr);
	return result
}
console.log(findLast([1, 2, 3]));

export {findLast}
