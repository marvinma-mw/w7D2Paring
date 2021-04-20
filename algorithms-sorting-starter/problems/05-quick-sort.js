// Implement Quick Sort

function quickSort(array) {
  // your code here
  if (array.length<=1){
    return array;
  }
  let pivot = array.shift();
  let left = array.filter(element=>element<pivot);
  let right = array.filter(element=>element>=pivot);

  let leftSort = quickSort(left);
  let rightSort = quickSort(right);

  return leftSort.concat(pivot).concat(rightSort);

}


module.exports = {
  quickSort
};
