export function findOddInt(inputIntList) {
  
const result = [];
  function findTheOddInt(inputIntList) {
    for (let i = 0; i < inputIntList.length; i++) {
      const count = inputIntList.filter((value) => value === inputIntList[i]).length;
      
      if (count % 2 == 1) {
        result.push(inputIntList[i]);
        return
      }
    }
  }

  findTheOddInt(inputIntList);
  
  return result;
}
