class Solution {
  int differenceOfSums(int n, int m) {
    int r= 0 ;
    for(int i=1;i<=n;i++){
        r+=i%m==0?-i:i;
    }
    return r;
  }
}