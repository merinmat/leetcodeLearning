function palindromeNumber(x) {
    x =x.toString();
 
let j = x.length -1;
 
  for(let i=0; i<= x.length/2; i++){
   if(x[i] !== x[j]) return false
   j--;
 }
 
   return true
};

// palindromeNumber(121) true