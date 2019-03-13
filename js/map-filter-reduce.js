const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];




// console.log(users.languages);

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter(n => n.languages.length > 2);
console.log(threeLanguages);


// Use .map to create an array of strings where each element is a user's email address

const emailArray = users.map(function(n){
    return n.email;
});

console.log(emailArray);

// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const sumOfYears = (total, user) => total + user.yearsOfExperience;
const totalYears = users.reduce(sumOfYears, 0);
console.log(totalYears);

const averageYears = totalYears/users.length;
console.log(averageYears);

// Use reduce to get the longest email from the list of users.

const findLongest = (prev, current) => {
    return prev.length > current.email.length ? prev : current.email
};
const longestEmail = users.reduce(findLongest);

console.log(longestEmail);

// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const compileList = (list, user) => list + user.name + ' ';
const listOfNames = users.reduce(compileList, "your instructors are: ");
console.log(listOfNames);

// Bonus
// Use reduce to get the unique list of languages from the list of users.