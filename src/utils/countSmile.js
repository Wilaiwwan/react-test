export function CountSmileys(inputFace) {
  let result = 0;
  function countSmileys(inputFace) {
    const validSmileyRegex = /[:;][-~]?[)D]/;
    const count = inputFace.filter((face) => validSmileyRegex.test(face)).length;
    if (count) {
      result = count;
    } else {
        return result;
    }

  }

  countSmileys(inputFace);

  return result;
}
