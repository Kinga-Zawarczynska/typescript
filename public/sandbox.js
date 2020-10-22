"use strict";
// INSTEAD OF WRITING THIS WITH CODE DUPLICATION
var logDetails = function (uid, item) {
    console.log(item + " has uid of " + uid);
};
var greet = function (user) {
    console.log(user.name + " says hello");
};
//WE CAN WRITE THIS USING TYPE ALIAS
var logDetails2 = function (uid, item) {
    console.log(item + " has uid of " + uid);
};
var greet2 = function (user) {
    console.log(user.name + " says hello");
};
