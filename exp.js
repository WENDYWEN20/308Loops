// Question 1 Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

let i=1
for (i=1; i<=100; i++) {
    if (i%3==0 && i%5==0){console.log(`${i} is Fizz Buzz`)}
        else if (i%3==0){console.log(`${i} is Fizz`)}
            else if (i%5==0){console.log(`${i} is Buzz`)}
                else {console.log(i)}

};

// Part 2: Prime Time
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
let num = 37;
function prime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
if (prime(num) == true) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is a not prime number`);
}

function next_prime(num) {
  let currentNumber = num + 1;
  while (true) {
    if (prime(currentNumber)) {
       console.log(`The next prime number after ${num} is ${currentNumber}`);
    
        break;
    }
  currentNumber=currentNumber+1;}
}
next_prime(num)

// Question 3 is too difficult. I asked around to have it solved.
//Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

let csvString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell =''
// treat cell as string
let cell1, cell2, cell3, cell4;
let cellCounter =0;

for (let i=0; i<csvString.length; i++){
    let char=csvString[i];
    // if you encounter a ',' separate it, assign what's in cell string into cell1,2,3,4
    if (char === ','){
        switch (cellCounter) {
            case 0: cell1= cell; break;
            case 1: cell2= cell; break;
            case 2: cell3= cell; break;
            case 3: cell4= cell; break;
        }
    cell = '';
    cellCounter++;
    }
    // when getting the end of the row, \n, console.log all 4 cells, change cellCounter to zero again
    else if (char === '\n'){
        cell4=cell;
        console.log(cell1, cell2, cell3, cell4);
        cell = '';
        cellCounter =0;}
        else{cell += char;} 
        //this line runs the first to have cell be 'Index', then meet a ',' cellCounter =0, cell1='Index', repeat, cellCounter change from 0,1,2,3. cell becomes an empty local string again.
    }
// For the last row, there would be no /n, thus need to write a new line for the last row. As long the loop exit from the above code, cell will be an empty 
if (cell) {
    cell4 = cell;
    console.log(cell1, cell2, cell3, cell4);
}
