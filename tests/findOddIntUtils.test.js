import { findOddInt } from "../src/utils/findtheOddIntUtils";

test('Find the odd integer', () => {
  const arr1 = findOddInt([7]);
  const arr2 = findOddInt([0,1,0,1,0]);

  console.log(arr1); // 7
  console.log(arr2); // 0
});