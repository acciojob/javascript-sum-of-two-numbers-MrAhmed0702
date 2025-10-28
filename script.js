let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
if(Number(input1) && Number(input2)){
	alert(`The sum of ${input1} and ${input2} is ${input1 + input2}.`);
} else {
	alert(`Invalid input. Please enter a valid number.`)
}