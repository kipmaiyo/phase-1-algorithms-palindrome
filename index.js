//function isPalindrome(word) {
 
  function reverse(word) {
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord; 
  }
  
  function isPalindrome(word) {
     // Write your algorithm here
    const reversedWord = reverse(word)
    if (word === reversedWord ){
      return true
    }else{
      return false
    }
}

/* 
  Add your pseudocode here

   
Convert the input word to lowercase
Remove non-alphanumeric characters from the word
Create a reversed version of the cleaned word
Compare the cleaned word with its reversed version
If they are identical, return true (it's a palindrome)
Otherwise, return false (it's not a palindrome)

*/

/*
  Add written explanation of your solution here


  The code consists of two functions: reverse(word) and isPalindrome(word).

The reverse(word) function takes a word as input and reverses it. Here's how it works:

It creates an array wordArray by splitting the input word into an array of individual characters.
It reverses the order of elements in the wordArray using the reverse() method.
It joins the reversed elements of wordArray back into a single string reversedWord.
Finally, it returns the reversedWord.
The isPalindrome(word) function checks whether a word is a palindrome or not. Here's how it works:

It calls the reverse(word) function to obtain the reversed version of the input word and assigns it to reversedWord.
It compares the original word with the reversed word using the equality operator (===).
If the original word and the reversed word are the same, it means the word is a palindrome. In this case, the function returns true.
If the original word and the reversed word are different, it means the word is not a palindrome. In this case, the function returns false.
Essentially, the code checks if a word remains the same when it is reversed. If it does, the word is considered a palindrome, and the 
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
