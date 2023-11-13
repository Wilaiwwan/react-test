export function generatePermutations(inputString) {
  
    const result = [];
    
  
    function permute(current, remaining) {
      if (remaining.length === 0 ) {
        
        result.push(current);
        return;
      }

      const valueChars = new Set(remaining);

      for (let char of valueChars) {
        const updatecurrent = current + char
        const updatedRemaining = remaining.replace(char, '');
        permute(updatecurrent, updatedRemaining)
      }
    }
    permute('', inputString);
  
    return result;
  }
  