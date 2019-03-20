const wait = (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, milliseconds)

    })
};

wait(1000).then(() => console.log("you'll see this after 1 seconds"));
wait(3000).then(() => console.log("you'll see this after 3 seconds"));

let headers = {'Authorization': `token ${GITHUB_TOKEN}`};

fetch('https://api.github.com/users/danielfryar', {'headers': headers})//My github needs to be added
    .then((data) => {
    return data.json();
    })
    .then((jsonData) => {
        return fetch(data.events_url, {headers: headers})
    });
