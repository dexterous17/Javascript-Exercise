/*
Write a JavaScript program to check whether a number is even or not.
*/
(function () {
    function evenOdd(pickedNumber) {
        if (pickedNumber===0) {
            return "Even";
        } else if (pickedNumber === 1){
            return "Odd";
        } else {
            return evenOdd(pickedNumber-2);
        }
    }
    
    console.log(evenOdd(26));
})();