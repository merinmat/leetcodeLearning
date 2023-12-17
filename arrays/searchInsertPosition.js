function searchInsertPosition(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid = Math.floor((left+ right)/2);
    
//to find the index position of the provided target in the nums array
    while(left<=right){
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target){
            left = mid + 1;
            mid = Math.floor((left+ right)/2);
        } else{
            right = mid - 1;
            mid = Math.floor((left+ right)/2);
        }

    }
    //if the target is not found, then return the supposed index of the target
  return nums[mid] < target? left : right +1;
};