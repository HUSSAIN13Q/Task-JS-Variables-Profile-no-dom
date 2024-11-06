/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */
const fullName="hussain alsaffar";
const yearOfBirth=2000;
const hobby="handyman work";
const funFact=" my foot size is 49";
const image="bcdbcjdncjdnhjcdbhcnbdjcxnjhedndxj";
// Part 1 answer 👇🏻 ...

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: "My name is {fullName}""
 * 2. ageString   -> assign it to: "I am {YOUR_AGE}"", and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: "My hobby is {YOUR_HOBBY}""
 *
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */
console.log(`My name is ${fullName}`);
console.log(`I am ${yearOfBirth}`);
console.log(`My hobby is doing some  ${hobby}`);
const fullNameString =`My name is ${fullName}`;
const ageString =`I am ${2024-yearOfBirth}`;
const hobbyString =`My hobby is ${hobby}`;


// const fullNameString = `My name is ${}`;
// const ageString =
// const hobbyString =

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  stars=stars+1 
  console.log(stars)

}
function decrementBy1() {
  stars= stars-1
  console.log(stars)

}

function incrementBy2() {
  stars=stars+2
  console.log(stars)

}
function decrementBy2() {
  stars=stars-2
  console.log(stars)
}

// TODO: Uncomment these variables as you work on them
// Make sure they're all uncommented before you push your solution!
module.exports = {
  fullName,
  yearOfBirth,
  hobby,
  funFact,
  image,
  fullNameString,
  ageString,
  hobbyString,
  incrementBy1,
  incrementBy2,
  decrementBy1,
  decrementBy2,
};
