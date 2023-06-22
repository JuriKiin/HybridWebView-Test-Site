let bridge = {
    removeDOM: () => {
        document.querySelector('.loader').remove();
    },
    testWebImplementation: (userId) => {
        registerUserForPushNotifications(userId, (result) => {
            let message = result != null ? result : "Error"
            window.sampleName.showToast(message)
        });
    },
    testAsyncError: (userId) => {
        asyncError(userId, (result) => {
            let message = result != null ? result : "Error"
            window.sampleName.showToast(message)
        });
    },
    testSync: () => {
        window.sampleName.showToast("Hello World!");
    }
}

window.registerUserForPushNotifications = (userId, callback) => {
    //if using web, web provides implementation here
    //if using mobile, modile will override/inject implementation
    console.log("If you see this, we are not on mobile.")
}

window.asyncError = (userId, callback) => {
    console.log("If you see this, we are not on mobile.");
}