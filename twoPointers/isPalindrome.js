const isPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      while (left < right && !isAlphanumeric(s[left])) left++;
      while (left < right && !isAlphanumeric(s[right])) right--;
  
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Update the regex to check for alphanumeric characters properly
  const isAlphanumeric = (char) => {
    return /^[a-zA-Z0-9]$/.test(char); 
  }
  
  const result = isPalindrome("Was it a car or a cat I saw?"); 
  console.log(result);

//Time complexity: O(n)
//Space complexity: O(1)