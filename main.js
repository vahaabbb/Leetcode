
// const limit = parseInt(prompt("Enter the limit:"));


// for (let number = 1; number <= limit; number++) {
//     if (number % 2 === 0) {
//         console.log(`${number} is an even number.`);
//     } else {
//         console.log(`${number} is an odd number.`);
//     }
// }



// const number = parseFloat(prompt("Enter a number:"));


// if (number > 0) {
//     console.log(`${number} is a positive number.`);
// } else if (number < 0) {
//     console.log(`${number} is a negative number.`);
// } else {
//     console.log("The number is zero.");
// }



// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const num3 = parseFloat(prompt("Enter the third number:"));


// let largest;

// if (num1 >= num2 && num1 >= num3) {
//     largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// } else {
//     largest = num3;
// }
// console.log(`The largest number is: ${largest}`);



// const year = parseInt(prompt("Enter a year:"));
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }



// const marks = parseFloat(prompt("Enter the marks:"));
// if (marks >= 90 && marks <= 100) {
//     console.log("S grade");
// } else if (marks >= 80 && marks < 90) {
//     console.log("A grade");
// } else if (marks >= 70 && marks < 80) {
//     console.log("B grade");
// } else if (marks >= 60 && marks < 70) {
//     console.log("C grade");
// } else if (marks >= 50 && marks < 60) {
//     console.log("D grade");
// } else if (marks >= 40 && marks < 50) {
//     console.log("E grade");
// } else if (marks >= 0 && marks < 40) {
//     console.log("Student has failed");
// } else {
//     console.log("Invalid marks");
// }


// let rows = 6;
// for (let i = 1; i <= rows; i++) {
//     let output = "";
//     for (let j = 1; j <= rows - i; j++) {
//       output += " ";
//     }  
//     for (let k = 1; k <= i; k++) {
//       output += "* ";
//     }
  
//     console.log(output);
//   }




// function hollowReversePyramid(n) {
//     for (let i = n; i >= 1; i--) {
//         let row = '';

       
//         for (let j = 0; j < n - i; j++) {
//             row += ' ';
//         }

       
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             if (j === 1 || j === 2 * i - 1 || i === 1) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }

//         console.log(row);
//     }
// }
// let n = 5; 
// hollowReversePyramid(n);



// const rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';  

    
//     for (let j = 0; j < i; j++) {
//         line += String.fromCharCode(65 + j);  
//     }

   
//     console.log(line);
// }



// let currentNumber = 1;


// const rows = 4;


// for (let i = 1; i <= rows; i++) {
//     let line = ''; 

  
//     for (let j = 1; j <= i; j++) {
//         line += currentNumber + ' ';  
//         currentNumber++;  
//     }


//     console.log(line.trim()); 
// }


// function printNumberPyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
        
      
//         for (let j = 1; j <= n - i; j++) {
//             row += ' ';
//         }

      
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             row += j;
//         }

//         console.log(row);
//     }
// }

// let n = 5; 
// printNumberPyramid(n);
