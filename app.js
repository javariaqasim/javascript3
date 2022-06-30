// .......................STRING METHOD.......................
 
// ANSWER 1

// var firstName =prompt ("Enter first name");
// var lastName = prompt("Enter last name");
// document.write(firstName + " " + lastName)

// ANSWER 2

// var txt =prompt("Enter mobile phone model","Samsung Galaxy S6 Edge Plus ");
// var len = txt.length;

// document.write("My favourite phone is" + txt +"<br>"+"Length of string" + len);

// ANSWER 3

//  var str = "Pakistani";
//  var last = "7"
//  document.write("string:" + str  + "<br>" + "index of 'n':" + last)


// ANSWER 4

// var hello = "Hello World";
// var last = "9"
// document.write("string:" + hello + "<br>" + "last index of 'l':" + last)



// ANSWER 5

// var input =prompt("enter string")
// var last = input.slice (-1)
// document.write ("string :" + input + "<br>")
// document.write( "<br>" + "character of index 3 :"+"" + last)



// ANSWER 8

// var message = "Ali and Sami are best friends. They play circket and football together."
// var replacetext=message.replaceAll("and" , "&")
// document.write(replacetext)

// ANSWER 9

// var value = "472"

// console.log(value + "\n" + typeof (value))
// var newval=parseInt(value)
// console.log(newval + "\n" + typeof (newval))

// ANSWER 10

// var input=prompt ("Enter input")
// var result = input.toUpperCase()
// console.log(result)

// ANSWER 11

// var input =prompt ("Enter input")
// var result = input.toUpperCase()
// console.log(result)
// var input =prompt ("Enter input")
// var result = input[0].charAt()
// console.log(result)

// ANSWER 16

// var university ="university of karachi";
// for ( var i=0 ; i<university.length; i++){
//     var character = university.split('');

//     document.write(character[i])
//     document.write ("<br>")
// }


// ANSWER 17

// var input =prompt("enter string")
// var last = input.slice (-1)
// document.write ("string :" + input)
// document.write("<br>" + "last char is "+"" + last)

// ANSWER 18

// var str = "the quickbrown fox jumps over the lazy dog"
// document.write("Text : the quick brown fox jumps over the lazy dog")
// var count = (str.match(/the/g)).length
// document.write("<br>" + "There are" + count + "occurence of word the")


// ..................MATHS METHOD....................

// ANSWER 1

// var num = prompt("Enter a positive floating point")
// document.write("number" + "" + ":" + "" + num + "<br>")
//  var a = Math.round(num)
//  document.write("Round value" + "" + ":" + "" + num + "<br>")
//  var a = Math.floor(num)
//  document.write("Floor value" + "" + ":" + "" + num + "<br>")
//  var a = Math.ceil(num)
//  document.write("ceil value" + "" + ":" + "" + num + "<br>")

// ANSWER 2

// var num = prompt("Enter a negative floating point")
// document.write("number" + "" + ":" + "" + num + "<br>")
//  var a = Math.round(num)
//  document.write("Round value" + "" + ":" + "" + num + "<br>")
//  var a = Math.floor(num)
//  document.write("Floor value" + "" + ":" + "" + num + "<br>")
//  var a = Math.ceil(num)
//  document.write("ceil value" + "" + ":" + "" + num + "<br>")

// ANSWER 3

// var a= Math.abs(-4)
// document.write("The absolute value is",a)


// ANSWER 4

// var DiceRoll =Math.floor (Math.random()*6)
// document.write("Random Dice value" + DiceRoll)


// ANSWER 5

// var  x =prompt("First person name")
// var y = prompt("second person name")
// var a= "heads"
// var b = "tails"
// var toss = Math.floor(Math.random()*2)
// if (toss ==0){
//     alert(x + "win the toss," + "random coin value:" + a)
// }
// else{
//     alert(y + "win the toss," + "random coin value:" + b) 
// }

// ANSWER 6

// var an = Math.floor(Math.random()*100)
// document.write(an)

// ANSWER 7

// var num = prompt("Enter your weightin kilograms")
// var weight = parseFloat(num)
// var totalweight = weight + 8.3
// document.write ("The weight of user is " + totalweight + " kilograms")

// ANSWER 8

// var guess =+prompt("Enter a number between 1 and 10")
// var secretNumber = Math.floor(Math.random() + 10) + 1
// if (guess === secretNumber)
// {
//     alert("well done!correct answer")
// }
// if (guess !== secretNumber)
// {
//     alert("try again")
// }
