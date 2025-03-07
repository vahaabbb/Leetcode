class Solution {
  String greatestLetter(String s) {
    Set<String> set = s.split('').toSet();
    List<String> list = s.split('')..sort();
    list = list.reversed.toList();
    String text = '';
    for(String i in list){
        if(set.contains(i.toLowerCase()) && set.contains(i.toUpperCase())){
            text = i.toUpperCase();
            break;
        }
    }
    return text;
  }
}
    
  
