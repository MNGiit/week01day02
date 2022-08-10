// Example 1
let a = 0;
let b = 100;
let c = a + b;
console.log("Sum of 2 variables is: " + c);

// Example 2
let d = 2 * b;
let e = (d + 5) * c;
console.log("Sum of new variables: " + d + b);

// Example 3
let one = 10;
let two = 20;
let three = 30;
let four = 40;
let five = 50;
let six = 60;
let seven = 70;
let eight = 80;
let nine = 90;
let ten = 100;
let first5 = one + two + three + four + five;
let last5 = six + seven + eight + nine + ten;
first5 = first5/5;
last5 = last5/5;
console.log("Average of the two results: " + (first5 + last5)/2);

// Example 4
let average = 4 + 10 + 22 + -33 + 55;
average = average/5;
console.log("Average of 4, 10, 22, -30, 55: " + average);
let firstAverage = average;
average = 68 + 7 + -22 + 9 + 100;
average = average/5;
console.log("Average of 68, 7, -22, 9, 100: " + average);
average = average + firstAverage;
average = average/2;
console.log("Final average of the two averages: " + average);