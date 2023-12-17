function validAnagram(s, t) {
    if(s.length !== t.length) return false;
     
     let obj1 = {};
     let obj2 = {};
 
     for(let str1 of s){
         obj1[str1] = (obj1[str1] || 0) +1;
     }
 
     for(let str2 of t){
         obj2[str2] = (obj2[str2] || 0) +1;
     }
 
     for(key in obj1){
         if(obj1[key] !== obj2[key]) return false;
     }
     return true;
}

//validAnagram('car','arc') true
//validAnagram('car','rat') false