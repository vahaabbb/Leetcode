class Solution {
  int missingNumber(List<int> nums) {
    int n = nums.length;
    int sum = nums.reduce((a, b) => a + b);
    return n * (n + 1) ~/ 2 - sum;
  }
}