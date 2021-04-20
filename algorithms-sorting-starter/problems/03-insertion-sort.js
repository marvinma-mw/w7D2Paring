// Implement Insertion Sort

function insertionSort(list) {

  for( let i=1; i<=list.length; i++){
    let temp = list[i];
    for( let j=i-1; j>=0 && list[j]> temp; j--){
        list[j+1] = list[j];
        list[j]=temp;
    }
  }
  return list;
}


// function insertionSort(list){
//   for(let i=1;i<list.length;i++){
//     for(let j=i;j>0;j--){
//       if(list[j]<list[j-1]){
//         const temp=list[j];
//         list[j]=list[j-1];
//         list[j-1]=temp
//       }
//     }
//   }
//   return list;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////
// const insertionSort = (list) =>{
//   // this for loop starts from the second num(at list[1])
//   for(let i=1;i<list.length;i++){
//   // set j for another loop starts at list[0]
//     let j= i-1;
//   // set temp at lsit[1]
//     let temp=list[i];
//   //while conditions: as long as j is greater than and equal to 0 or list[j] is greater than temp
//   // we will go in the while loop
//     while(j>=0 && list[j]>temp){
//   //we swap list[i] with list[j]
//       list[j+1]=list[j]
//   // decrement through the sorted part
//       j--
//     }
//   // reset the list[i or j+1] to the temp number that we stored
//     list[j+1]=temp;
//   }
//   // we return the list
//   return list;
// }

console.log(insertionSort([3,8,2,1,10,5]))

module.exports = {
  insertionSort
};
