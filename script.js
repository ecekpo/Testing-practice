 //Section function stringLength(string) taking any string as argument and returns characters count
function stringLength(str) {
    if(str === '') {return 'empty string';}
    if(str.length > 10) {return 'string length must not exceed 10 characters'}
    return str.length;
  }
  
//Section function reverseString(string).
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  //Section  Test for a capitalize(string) function.
  function capitalizeString(str) {
    return str.charAt(0).toUpperCase()+str.substring(1,str.length);
  }
  
  //Section calculator class which have 4 methods: addition, subtraction, division, and multiplication.
  function add(a,b) {
    return a+b;
  }
  function subtract(a,b) {
    return a-b;
  }
  function multiply(a,b) {
    return a*b;
  }
  function divide(a,b) {
    return a/b;
  }
  
  module.exports = { stringLength,reverseString,capitalizeString,add,subtract,multiply,divide};