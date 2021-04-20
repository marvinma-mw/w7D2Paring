// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

// function bubbleSort(array) {
//   // your code here
//   let status=true;
//   while(status===true){
//     status=false;
//     for(let i=0; i<array.length-1;i++){
//       if (array[i]>array[i+1]){
//         swap(array,i,i+1)
//         status=true;
//       }
//     }
//   }
//   return array;
// }

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (inputArr[j] > inputArr[j + 1]) {
            swap(inputArr,j,j+1)
              // let tmp = inputArr[j];
              // inputArr[j] = inputArr[j + 1];
              // inputArr[j + 1] = tmp;
          }
      }
  }
  return inputArr;
};

// console.log(bubbleSort([3,8,2,1,10,5]))

module.exports = {
  bubbleSort,
  swap
};
