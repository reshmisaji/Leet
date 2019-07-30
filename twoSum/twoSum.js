/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for(let index = 0; index < nums.length-1; index ++){
      for(let innerLoop = index+1 ;innerLoop < nums.length; innerLoop ++){
          if(nums[index]+nums[innerLoop] === target)
              return [index,innerLoop]
      }
  }
  return [];
};