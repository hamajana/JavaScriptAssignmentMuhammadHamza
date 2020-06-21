/**Question 1
var a = prompt("your First Name :");
var b = prompt("your Last Name :");
alert("Your full name : "+(a+" "+b));

//Question 2
var mob = prompt("your Favourite Mobile Name :");
alert("String length : "+mob.length);
document.writeln("Your Favourite mobile model name : "+mob);
document.writeln("Words alphabet length : "+mob.length);

//Question 3
var str = "Pakistani";
var n = str.indexOf("n");
alert("Index of 'n' : "+n);

//Question 4
var str = "Hello world";
var n = str.lastIndexOf("l");
alert("Last Index of 'l' : "+n);

//Question 5
var str = "Pakistani";
alert("Index of 3 : "+str[3]);
//Question 6
var a = prompt("your First Name :");
var b = prompt("your Last Name :");
var ab = a.concat(b);
alert("Your full name : "+ab);

//Question 7
var a = "Hyder";
var b = "Islam";
var c = "bad";
var ac = a.concat(c);
var bc = b.concat(c);
alert("City: "+ac);
alert("After Replacement: "+bc);
//Standard Syntax for replcement
var str = "Hyderabad";
var rep = str.replace("Hyder", "Islam");
alert(rep);

//Question 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep = message.replace(/and/g,"&");//'g' here used for performing a global replacenent
alert(rep);

//Question 9
var a = prompt("Input anything :");
var up = a.toUpperCase();
alert("Input in UpperCase : "+up);
**/
//Question 10
var num = 33.56;
var str = num.toFixed();
alert("Int has been convertd into String : "+str);
