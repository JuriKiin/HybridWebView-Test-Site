let bridge = {
    testWebImplementation: (userId) => {
        registerUserForPushNotifications(userId, (error, result) => {
            if (error) {
              window.hybrid.showToast(error);
            } else {
              window.hybrid.showToast(result || '');
            }
        });
    },
    testAsync: () => {
        window.hybrid.getAsyncPromise().then((res) => {
            window.hybrid.showToast(res);
        })
    },
    testSync: () => {
        window.hybrid.showToast("Hello World!");
    },
    testCallback: (message) => {
        window.hybrid.showToast(message);
    }
}

function registerUserForPushNotifications(userId, callback) {
    //if using web, web provides implementation here
    //if using mobile, modile will override/inject implementation
    window.hybrid.showToast("This will be overwritten")
}