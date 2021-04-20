// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(list) {
  for(let i = 0; i < list.length; i++){
    let minimum = i
    for(let j = i + 1; j < list.length; j++){
      if(list[minimum] > list[j]){
        minimum = j
      }
    }
    swap(list, i, minimum);
  }
  return list;
}

module.exports = {
  selectionSort,
  swap
};
