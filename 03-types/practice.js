// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (number) {
  if(number%3=0)
  return true;
};
console.log(isDivisibleBy3(6));


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (celsius) {
  return((9*celsius/5)+32);
};

var fahrToCels = function (fahrenheit) {
  return((fahrenheit-32)*(5/9));
};


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (num) {
  return (Math.round(Math.random()*num));
};


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (num1,num2) {
return  (Math.round(Math.random()*(num2-num1)+num1));

};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (suit) {
  var x=suit.toUpperCase();
if(x=="HEARTS"||x=="CLUBS"||x=="DIAMONDS"||x=="SPADES")
{
  return true;
}
else {
  return false;
}
};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (rank) {
  var x=rank.toLowerCase();
if(x=="two"||x=="three"||x=="four"||x=="five"||x=="six"||x=="seven"||x=="nine"||x=="ten"||x=="jack"||x=="queen"||x=="king"||x=="ace")
{
  return true;
}
else {
  return false;
}
};


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (suit ,rank) {
  var x=suit.toUpperCase();
if(x=="HEARTS"||x=="CLUBS"||x=="DIAMONDS"||x=="SPADES")
{
  var x=rank.toLowerCase();
if(x=="two"||x=="three"||x=="four"||x=="five"||x=="six"||x=="seven"||x=="nine"||x=="ten"||x=="jack"||x=="queen"||x=="king"||x=="ace")
{
  return true;
}
}
else
  {
    return false;
  }

};


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (string) {
console.log(string.charAt(0));
var count=0;
for(var x='A';x<='Z';x++)
{
  console.log(x);
  count++;

  if(string.charAt(0)==x)

  {
       return true;
}
}
console.log(count);

};


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (string)
{
  var a=string.indexOf(">");
  var b=string.lastIndexOf("<");
  var s=string.substring(a+1,b);
  return s;
};


// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (string) {
  var l=string.length;
  var a=string.indexOf(">");
  var s1=string.substring(0,a+1);
  var b=string.lastIndexOf("<");
  var s2=string.substring(b,l);
  var l2=s2.length;
  var l1=s1.length;
  if(l2-l1==1)
  {
//  console.log(s1+s2);
var s2=s2.replace('/',"");
console.log(s1+s2);
if(s1==s2)
return true;
else {
  return false;
}
}
else {
  return false;
}
};
