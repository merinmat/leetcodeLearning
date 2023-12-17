function twoSum(nums, target) {
    let obj = {};

    //finds the difference and checks if the difference in the obj hashmap
    //if found, then those two integers sum upto the provided target
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        
        if(diff in obj) return [obj[diff],i];
        obj[nums[i]] = i;
    }
}

//twoSum([1,2,3],5) -> 2+3=5