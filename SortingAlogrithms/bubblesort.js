function bubbleSort(array) {
    for(let i=0;i<array.length;i++){
      for(let j=0;j<array.length-1-i;j++){
        if(array[j]>array[j+1]){
          const temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
    console.log(array)
    return array;
    // Only change code above this line
  }
  
  bubbleSort([1, 4, 2, 8, 345, 123, 32, 5643, 63, 123, 43, 55, 234, 92]);