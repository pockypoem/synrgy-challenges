async function getRandomUsername() {
    console.log("Mencari username....")
    return "sabrina"
}

getRandomUsername()
    .then((username) => {
        console.log("Username ketemu!");
        console.log(username);
    })
    .catch((err) => {
        console.log("Username gak ketemu!");
    })