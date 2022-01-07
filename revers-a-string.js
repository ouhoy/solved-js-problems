// Create a function the reveses a string
// For example"Hello" should be "olleH"
const text = "Hello world ";

function reverse(str){
  
  let reversedText =[];

  for ( let i = str.length ; i >= 0; i--) {
  reversedText.push(str[i]);

  }

 console.log(reversedText.join(""));
};

reverse(text)