var multiDimensionalArrays = [[], [] ,[]];
multiDimensionalArrays[0]=[0, 5, 2, 1];
multiDimensionalArrays[1]=[2,1,0,3];
multiDimensionalArrays[2]=[2,1,0,4];

document.write(multiDimensionalArrays[0].join(" ")+ "<br>" );
document.write(multiDimensionalArrays[1].join(" ")+ "<br>" );
document.write(multiDimensionalArrays[2].join(" ")+ "<br>" + "<br>");

for (i=1; i<=10; i++){
    document.write(i+ "<br>"+ "<br>");
}

var reqNumberOfTable= +prompt("Enter A Number For Multiplication");
var lengthOfTable= +prompt("Enter A Length Of Table");
document.write("<b>Multiplication Table of " + reqNumberOfTable + "</b>" + "<br>");
document.write("<b>Length " +lengthOfTable + "</b>"+ "<br>"+ "<br>");
// let flag = false;
if (isNaN(reqNumberOfTable) || 
isNaN(lengthOfTable) ){
      alert("You Entered an Invalid Number ");
    }
else{
    for(var i=1; i<=lengthOfTable; i++){
    document.write(reqNumberOfTable+ " x " + i + " = " + reqNumberOfTable * i + "<br>"  );
}
}

var fruits= ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for(i=0; i<fruits.length; i++){
    document.write(fruits[i]+ "<br>");
}
for(i=0; i<fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i]+ "<br>"+ "<br>");
}
