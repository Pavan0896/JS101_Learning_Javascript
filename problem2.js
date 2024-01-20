function lastIndexOfArray(arr, x) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        index = i;
      }
    }
    return index;
  }
  console.log(lastIndexOfArray(["Dodo", "Tiger", "Penguin", "Dodo"], "Dodo"));
  console.log(lastIndexOfArray(["Dodo", "Tiger", "Penguin", "Dodo"], "Tiger"));