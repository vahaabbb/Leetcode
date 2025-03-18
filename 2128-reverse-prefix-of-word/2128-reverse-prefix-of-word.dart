class Solution {
  String reversePrefix(String word, String ch) {
    int idx = word.indexOf(ch);
    if (idx == -1) {
      return word;
    }

    String prefix = word.substring(0, idx + 1);
    String reversedPrefix = prefix.split('').reversed.join('');
    return reversedPrefix + word.substring(idx + 1);
  }
}