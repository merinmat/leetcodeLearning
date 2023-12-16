function twoSum(nums, target) {
    let obj = {};

    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        
        if(diff in obj) return [obj[diff],i];
        obj[nums[i]] = i;
    }
}