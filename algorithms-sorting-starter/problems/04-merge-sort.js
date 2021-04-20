// Implement Merge Sort

function merge(array1, array2) {
  let result = [];
  while(array1.length > 0 && array2.length > 0){
    const leftEl = array1[0]
    const rightEl = array2[0]
    let nextEl;

    console.log("left element: ",leftEl)
    console.log("right element: ",rightEl)
    if(leftEl < rightEl){
      nextEl = array1.shift()
    }

    else{
      nextEl = array2.shift()
    }
    result.push(nextEl)
    console.log("next element: ", nextEl)
  }

  return result.concat(array1).concat(array2);
}

function mergeSort(array) {
  if(array.length <= 1){
    return array;
  }

  const midIdx = Math.floor(array.length / 2)
  const leftArr = array.slice(0,midIdx);
  const rightArr = array.slice(midIdx);
  const left = mergeSort(leftArr);
  const right = mergeSort(rightArr);

  // console.log(left)
  // console.log(right)

  return merge(left, right);
}

module.exports = {
  merge,
  mergeSort
};
