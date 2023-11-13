
import {generatePermutations} from '../src/utils/permutationUtils';

test('Generate permutations and remove duplicates', () => {
  const result1 = generatePermutations('abc');
  const result2 = generatePermutations('aabb');

  console.log(result1); // ["abc", "acb", "bac", "bca", "cab", "cba"]
  console.log(result2); // ["aabb","abab","abba","baab","baba",bbaa"]
});