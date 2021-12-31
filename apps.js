"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Ray';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, errorCode: code };
}
generateError('An Error Occured', 500);
