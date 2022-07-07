// .......................STRING METHOD.......................
 
// ANSWER 1

var firstName=prompt("Enter your first name")
var lastName=prompt("Enter your last name")
var fullName= firstName + lastName;
alert("Welcome " +fullName)

// ANSWER 2

var txt =prompt("Enter mobile phone model","Samsung Galaxy S6 Edge Plus ");
var len = txt.length;

document.write("My favourite phone is" + txt +"<br>"+"Length of string" + len);

// ANSWER 3

var str = "Pakistan.";
document.write("String :" +str)
var n = str.indexOf("n");
document.write("<br>Index of 'n' :" +n)

// ANSWER 4

var str = "Hello World.";
document.write("String :" +str)
var n = str.lastIndexOf("l");
document.write("<br>Index of 'l' :" +n)


// ANSWER 5

var name="Pakistani";
document.write("The String : " +name)
var firstChar = name.charAt(2);
document.write("<br>Character at index 3 : " +firstChar)

// ANSWER 6

var str1 = prompt("Enter first name ")
var str2 = prompt("Enter last name")
var res = str1.concat(str2);
alert("Welcome in JS world " +res)

// ANSWER 7

var cityName="Hyderabad";
document.write("City : " +cityName)
var firstChar = cityName.indexOf("Hyder");
 if (firstChar !== -1) {
    cityName = cityName.slice(0, firstChar) + "Islam" + cityName.slice(firstChar + 5);
 }
 document.write("<br>After replacement : " +cityName)



// ANSWER 8

var message = "Ali and Sami are best friends. They play circket and football together."
var replacetext=message.replaceAll("and" , "&")
document.write(replacetext)

// ANSWER 9

var num="472";
document.write("Value : " +num +"<br>")
document.write("Type :" +typeof num)
var num1= Number(num);
document.write("<br>Value : " +num1)
document.write("<br>Type :" +typeof num1)

// ANSWER 10

var text=prompt("Enter some text");
document.write("Users input : " +text)
var res = text.toUpperCase();
document.write("<br>Upper case : " +res)

// ANSWER 11

var text=prompt("Enter some text");
document.write("Users input : " +text)
var captializeStrig =(str) =>str[0].toUpperCase()+ str.slice(1).toLowerCase();
var res = text.split(' ').map(captializeStrig);
var capitalizeSentence =res.join(' ');
document.write("<br>Upper case : " +capitalizeSentence)

// ANSWER 12

var num = 35.36 ;
document.write("Number :" +num)
var str=num.toString();
str = str.replace('.','');
document.write("<br>Result :" +str)


// ANSWER 13

var username = prompt("Enter user name: ");
if (username.includes("@")||username.includes(".")||username.includes(",")||username.includes("!")){
alert("Please enter a valid user name")}
else{
alert("Valid user name")
}

// ANSWER 14

var item =prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ?: ");
var fruits = ["cake", "cake pie", "cookie", "chips", "patties"];
// Check if a value exists in the fruits array
var index =fruits.indexOf(item);
if(fruits.indexOf("cake") !== item)
{
        
    document.write(item + " is present at index " +index +" in our bakery");
}
 else if(fruits.indexOf("cake pie") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
else if(fruits.indexOf("chips") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
else if(fruits.indexOf("cookie") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
else if(fruits.indexOf("patties") !== item)
{
    document.write(item + " is present at index " +index +" in our bakery");
}
 else{
    document.write("We are sorry"+ item + "is not available in our bakery");
 }


// ANSWER 15

var username;           
var charAny;            
var anyNum = false;  
var index;              
var BR = "<br />";     
var ES = "";         

document.write("We'll begin helping you select a username" + BR);
document.write("Your username must have at least 8 characters," + BR);
document.write("   start with a letter, and contain at least 1 numeric character." + BR);
username = prompt("Please enter your username: ", ES);


while (username.length < 8) {
    document.write("Your username must be at least 8 characters long." + BR);
    username = prompt("Please enter your username: ", ES);
}

charAny = username.substr(0, 1);
while (charAny !== isLetter()) {
    document.write("The first character of your username must be a letter." + BR);
    username = prompt("Please enter your username: ", ES);
}
while (anyNum !== false) {
    
    for (index = 1; index < username.substr(index, index); index++) {
        anyNum = username.substr(index, index);
        if (isNumeric(charAny)) {
            anyNum = true;
        }
    }
    if (anyNum !== true) {
        document.write("Your username must include at least 1 digit." + BR);
        username = prompt("Please enter your username: ", ES);
    }
}

document.write("Thank you! Your new username is: " + username);


// ANSWER 16

var university ="university of karachi";
for ( var i=0 ; i<university.length; i++){
    var character = university.split('');

    document.write(character[i])
    document.write ("<br>")
}


// ANSWER 17

var str = prompt("User input: ");
str1= str.charAt(str.length-1);
document.write("Last character of input is: " + str1)

// ANSWER 18

var str = "the quickbrown fox jumps over the lazy dog"
document.write("Text : the quick brown fox jumps over the lazy dog")
var count = (str.match(/the/g)).length
document.write("<br>" + "There are" + count + "occurence of word the")


// ..................MATHS METHOD....................

// ANSWER 1

var num = prompt("Enter a positive floating point")
document.write("number" + "" + ":" + "" + num + "<br>")
 var a = Math.round(num)
 document.write("Round value" + "" + ":" + "" + num + "<br>")
 var a = Math.floor(num)
 document.write("Floor value" + "" + ":" + "" + num + "<br>")
 var a = Math.ceil(num)
 document.write("ceil value" + "" + ":" + "" + num + "<br>")

// ANSWER 2

var num = prompt("Enter a negative floating point")
document.write("number" + "" + ":" + "" + num + "<br>")
 var a = Math.round(num)
 document.write("Round value" + "" + ":" + "" + num + "<br>")
 var a = Math.floor(num)
 document.write("Floor value" + "" + ":" + "" + num + "<br>")
 var a = Math.ceil(num)
 document.write("ceil value" + "" + ":" + "" + num + "<br>")

// ANSWER 3

var num =+prompt("Enter positive or negative number")
var absoluteValue =Math.abs(num)
document.write("Absolute value of" +num +"=" +absoluteValue)

// ANSWER 4

var DiceRoll =Math.floor (Math.random()*6)
document.write("Random Dice value" + DiceRoll)


// ANSWER 5

var heads = 0;
var tails = 0;
if (Math.random() < 0.5){
    document.write("2<br> Random coin value:Heads")
}else{
    document.write("1<br> Random coin value: Tails")
}

// ANSWER 6

var an = Math.floor(Math.random()*100)
document.write(an)

// ANSWER 7

var num = prompt("Enter your weightin kilograms")
var weight = parseFloat(num)
var totalweight = weight + 8.3
document.write ("The weight of user is " + totalweight + " kilograms")

// ANSWER 8

var secretNum=Math.floor(Math.random()*10)
var number =+prompt("Enter a number between 1 and 10")
if (number===secretNum){
    alert("Congratulation you won!")
}
else{
    alert("Try again!")
}