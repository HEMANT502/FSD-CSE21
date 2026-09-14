function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Priya's data received");
        }, 2000);
    });
}

async function showUser() {
    const data = await getUser();

    console.log(data);
}

showUser();