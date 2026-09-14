function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hemant's data received");
        }, 2000);
    });
}

getUser()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
