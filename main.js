// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (user) {
    if (user.userRole === 'ADMIN') {
        return true;
    } else {
        return false;
    }
}

function getEmail (user) {
    const lowerCaseLetterFirst = user.firstName.toLowerCase();
    const lowerCaseLetterLast = user.lastName.toLowerCase();
    return `${lowerCaseLetterFirst}.${lowerCaseLetterLast}@codeimmersives.com`;
}

function getPlaylistLength (object) {
    return object.songs.length;
}

function getHardestHomework (assignment) {
    console.log(assignment);
    let first = Infinity;
    let second = '';
    for (const item of assignment) {
        if (item.averageScore < first) {
            second = item.name;
            first = item.averageScore;
        }
    }
    return second;
}

function createPhonebook (names, nums) {
    const phonebook = {};
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const num = nums[i];
        phonebook[name] = num;
    }

    return phonebook;
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};