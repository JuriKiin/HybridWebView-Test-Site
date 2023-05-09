let bridge = {
    testWebImplementation: () => {
        registerUserForPushNotifications(userId, (error, result) => {
            if (error) {
              window.hybrid.showToast(error);
            } else {
              window.hybrid.showToast(result || '');
            }
        });
    },
    testAsync: () => {
        Hybrid.getAsyncPromise().then((res) => {
            Hybrid.showToast(res);
        })
    },
    testSync: () => {
        Hybrid.showToast("Hello World!");
    },
    testCallback: (message) => {
        Hybrid.showToast(message);
    }
}

function registerUserForPushNotifications(userId, callback) {
    //if using web, web provides implementation here
    //if using mobile, modile will override/inject implementation
}