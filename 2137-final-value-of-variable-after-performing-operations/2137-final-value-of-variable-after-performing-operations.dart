class Solution {
  int finalValueAfterOperations(List<String> operations) {
    int count = 0;
    
    for(int i = 0; i < operations.length; i++ ){
    
    if ( operations[i] =="X++" || operations[i] == "++X" ){
        count++;
    }else if( operations[i] == "--X" || operations[i] == "X--"){
        count--;
    }
  }
      return count;
  
  
  }
    
  
    }