// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (password) {
  if(password.length>=10)
  return "strong";
  else if(password.length>=7 &&password.length<10)
  return "medium";
  else {
    return "weak";
  }

};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (number){
  var x=typeof(number);    <!-- finding th type of the given input-->
//  console.log(x);
//  console.log(number);
  if(x!="number")
  {
  throw "THAT'S NOT A NUMBER";
}
  else {
    if(number%4==0&&number%100!=0&&number%400!=0)
       {
         return true;
       }
      else {
        return false;
      }
    }

};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (s1,s2,s3){

if((typeof(s1)&&typeof(s2)&&typeof(s3))!="string") {
   return "ALL THREE ARGS MUST BE STRINGS!";
 }
 else if(s1<s2&&s1<s3){
   return s1;
 }
 else if(s2<s1&&s2<s3){
   return s2;
 }
 else if(s3<s1&&s3<s2){
   return s3;
 }
 else {
   return "ALL THREE ARGS MUST BE STRINGS!";
 }

};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string
//is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (input)
 {
   var a=input.indexOf("<");
   var b=input.indexOf(">");
   var s1=input.substring(a,b+1);
   console.log(s1);
   var c=input.lastIndexOf("<");
   var d=input.lastIndexOf(">");
   var s2=input.substring(c,d+1);
    console.log(s2);
    if(s2.length-s1.length==1)
    {
    var s2= s2.replace("/","");
      console.log(s2);
      if(s1==s2)
      {
         console.log(s1.substring(a+1,b));
      }
      else {
        throw "not an html element";
      }
    }
      else {
        throw "not an html element";
      }


};


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function () {
  var x=Math.random()*10;
//  console.log(x);
  if(x<=2.5)
  return "lol";
  if(x<=5)
  return "omg";
  if(x<=7.5)
  return "lmao";
  if(x<=10)
  return "rofl";

};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (string) {

  var type=typeof(string);
  if(type=="string")
  {
    //console.log("is a string");
    var index=string.indexOf("?");
    //console.log(index);
    if(index!=-1&&index==(string.length-1))
    {
      return true;
    }
    else {
      return false;
    }
  }
    else {
      return false;
    }


};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {
var res=isQuestion(question);
if(res)
{
  var rn=Math.random()*100;
  if(rn<=50)
  {
    return "yes";
  }
  if(rn<75)
  {
    return  "very doubtful";
  }
  if(rn<100)
  {
    return "My reply is no";
  }
}
else
 {
  throw "THAT  DOESN,T SOUND LIKE A  QUESTION";
}
};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet

//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (arg1,arg2,arg3) {
  var t1=typeof(arg1);
  var t2=typeof(arg2);
  var t3=typeof(arg3);
  if(t1=="string"&&t2=="number"&&t3=="string")
  {
    var beg=arg3.slice(0,arg2);
    var end=arg3.slice(arg2,arg3.length);
    var rs=beg+"-"+arg1+"-"+end;
  //  console.log(rs);
    return rs;
  }
  else {
    throw "expected first arg to be a string, second arg to be a number and third arg to be a string";
  }
};


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (string) {
  var rd=Math.random()*10;
  var l=string.length;
  var r=Math.round(Math.random()*l);
  if(rd<5)
  {
    msg="-lol-";

  }
  else {
    msg="-omg-";
  }
  var result=interjectAt(msg,r,string);
  console.log(result);

};
