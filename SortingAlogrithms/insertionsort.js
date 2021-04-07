function insertionsort(array){

    for(var i=0;i<array.length;i++){
        
        for(var j=i;j>0;j--){
            if(array[j]<array[j-1]){
                const temp = array[j];
                array[j]=array[j-1];
                array[j-1]= temp;
            }

        }
    }
    return array;

}

console.log(insertionsort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))