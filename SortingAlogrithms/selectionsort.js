function selectionSort(array) {
    // Only change code below this line
    for(var i=0;i<array.length-1;i++){
      var min = i;
      for(var j=i+1;j<array.length;j++){
        if(array[j]<array[min]){
          min = j;
        }
      }
      const temp = array[i];
      array[i]= array[min];
      array[min]=temp;
    }
    return array;
    // Only change code above this line
  }
  
  
  console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));