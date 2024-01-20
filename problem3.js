function arraySlice(arr, start, end) {
    let newArr = [];
    if (start < 0) {
      start = arr.length + start;
    }
    if (end < 0) {
      end = arr.length + end;
    }
    if (end === undefined) {
      end = arr.length;
    }
    for (let i = start; i < end; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  let arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(arraySlice(arr, 2 , 4));