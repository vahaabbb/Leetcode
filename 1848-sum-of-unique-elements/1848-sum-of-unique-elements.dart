class Solution {
    int sum = 0;
  int sumOfUnique(List<int> nums) {
    

    for(int i = 0; i < nums.length; i++){
        bool flag = true;
    for(int j = 0; j < nums.length; j++){
        if(i!=j && nums[i] == nums[j]){
            flag = false;
            break;
        }
    }
        if(flag){
            sum+=nums[i];
 

    }
    }
    return sum;
  }
}