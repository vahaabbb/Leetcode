class Solution {
  int numIdenticalPairs(List<int> nums) {
  int output = 0;
  for(var i = 0; i < nums.length; i++){
    for(var j = i + 1; j < nums.length; j++){
        if(nums[i] == nums[j] && i < j){
          output++;  
        }
    }
  }  
  return output;
  }
}