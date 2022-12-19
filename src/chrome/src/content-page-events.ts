chrome.runtime.onMessage.addListener((request, sender, respond) => {
    const handler = new Promise((resolve, reject) => {
        if (request) {
            resolve(
                `Im the contentPage! And you are in: ${window.location.href}`
            );
        } else {
            reject("The request is empty.");
        }
    });

    handler.then((message) => respond(message)).catch((error) => respond(error));

    return true;
});