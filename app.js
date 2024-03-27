// var multiDimensionalArrays = [[], [] ,[]];
// multiDimensionalArrays[0]=[0, 5, 2, 1];
// multiDimensionalArrays[1]=[2,1,0,3];
// multiDimensionalArrays[2]=[2,1,0,4];

// document.write(multiDimensionalArrays[0].join(" ")+ "<br>" );
// document.write(multiDimensionalArrays[1].join(" ")+ "<br>" );
// document.write(multiDimensionalArrays[2].join(" ")+ "<br>" + "<br>");

// for (i=1; i<=10; i++){
//     document.write(i+ "<br>"+ "<br>");
// }

// var reqNumberOfTable= +prompt("Enter A Number For Multiplication");
// var lengthOfTable= +prompt("Enter A Length Of Table");
// document.write("<b>Multiplication Table of " + reqNumberOfTable + "</b>" + "<br>");
// document.write("<b>Length " +lengthOfTable + "</b>"+ "<br>"+ "<br>");
// // let flag = false;
// if (isNaN(reqNumberOfTable) || 
// isNaN(lengthOfTable) ){
//       alert("You Entered an Invalid Number ");
//     }
// else{
//     for(var i=1; i<=lengthOfTable; i++){
//     document.write(reqNumberOfTable+ " x " + i + " = " + reqNumberOfTable * i + "<br>"  );
// }
// }

// var fruits= ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// for(i=0; i<fruits.length; i++){
//     document.write(fruits[i]+ "<br>");
// }
// for(i=0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i]+ "<br>"+ "<br>");
// }

document.write("Counting: "+ "<br>" );
for(var i=1; i<=15; i++){
    document.write(i+ "<br>"+ "<br>");
}

document.write ("Reverse counting: "+ "<br>") ;
for(var i=10; i>=1; i--){
    document.write(i+ "<br>"+ "<br>")
}

document.write("Even: "+ "<br>" );
for(i=0; i<=20; i+=2){
    document.write(i+ "<br>" + "<br>" );
}

document.write("Odd: "+ "<br>");
for(i=1; i<=20; i+=2){
    document.write(i+ "<br>"+ "<br>");
}

document.write("Series: "+ "<br>");
for(i=2; i<=20; i+=2){
    document.write(i+ "k"+ "<br>"+ "<br>")
}

var bakery=[ "cookie","patties","apple pie","chips","sandwich","cake","cold drink",]
var userInput= prompt("Welcome to the Bakery.... \nWhat Do You Want To Order Sir/Ma'am")
var flag=false;
for(i=0; i<bakery.length; i++) 
 {
    if(bakery[i].includes(userInput)){
        alert( bakery[i] + " is available at index " + i + " in our Bakery");
        flag=true
        break
    }
    
 }
 if(!flag){
        alert("We are Sorry... " + userInput + " is not available in our Bakery")
    }
 


var largestNumber=[24,53, 78, 91, 12];
document.write("Array Items: " + largestNumber+ "<br>");
document.write( "The Largest Number is: " + Math.max(...largestNumber)+ "<br>"+ "<br>");

var smallestNumber=[24,53, 78, 91, 12];
document.write("Array Items: " + smallestNumber+ "<br>");
document.write( "The Smallest Number is: " + Math.min(...smallestNumber)+ "<br>"+ "<br>");

var multiples=[];
for(i=5; i<=100; i+=5){
    multiples.push(i);
}
document.write(multiples);
