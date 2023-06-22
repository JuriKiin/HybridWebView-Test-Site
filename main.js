let bridge = {
    testWebImplementation: (userId) => {
        registerUserForPushNotifications(userId, (result) => {
            let message = result != null ? result : "Error"
            window.hybrid.showToast(message)
        });
    },
    testAsyncError: (userId) => {
        asyncError(userId, (result) => {
            let message = result != null ? result : "Error"
            window.hybrid.showToast(message)
        });
    },
    testSync: () => {
        window.hybrid.showToast("Hello World!");
    },
}

window.registerUserForPushNotifications = (userId, callback) => {
    //if using web, web provides implementation here
    //if using mobile, modile will override/inject implementation
    console.log("If you see this, we are not on mobile.")
}

window.asyncError = (userId, callback) => {
    console.log("If you see this, we are not on mobile.");
}