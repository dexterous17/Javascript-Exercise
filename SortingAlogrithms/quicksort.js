function quickSort(array) {
    // Only change code below this line
   if(array.length === 1){
     return array;
   }
  
   const pivot = array[array.length-1];
   const rightarr = [];
   const leftarr = [];
  
   for(let i=0;i<array.length-1;i++){
     if(array[i]<pivot){
       leftarr.push(array[i])
     }else{
       rightarr.push(array[i])
     }
   }
  
    if(leftarr.length > 0 && rightarr.length > 0){
      return [...quickSort(leftarr),pivot,...quickSort(rightarr)]
    }else if(leftarr.length > 0){
      return [...quickSort(leftarr),pivot];
    }else{
      return [pivot,...quickSort(rightarr)];
    }
      
    // Only change code above this line
  }

  console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))