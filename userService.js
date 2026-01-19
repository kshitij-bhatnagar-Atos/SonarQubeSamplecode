// userService.js

var users = []; // Code smell: var instead of let/const

function addUser(user) {
    if (user != null) { // Bug: != instead of !==
        users.push(user);
    }
}

function findUser(name) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == name) { // Bug: == instead of ===
            return users[i];
        }
    }
    return null;
}

function authenticate(username, password) {
    // Security issue: hardcoded credentials
    if (username === "admin" && password === "admin123") {
        return true;
    }
    return false;
}

function calculateDiscount(price) {
    if (price > 100) {
        return price * 0.1;
    } else {
        return price * 0.1; // Code smell: identical branches
    }
}

function unusedFunction() {
    console.log("Unused");
}

module.exports = {
    addUser,
    findUser,
    authenticate,
    calculateDiscount
};
