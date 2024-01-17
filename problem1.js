function arrayIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  let arr = ['cat', 'dog', 'bat'];
  let value = 'tac';
  var result = arrayIncludes(arr, value);
  
  console.log(result); 