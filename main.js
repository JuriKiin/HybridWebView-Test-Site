let bridge = {
    testWebImplementation: () => {
        window.hybrid.registerUserForPushNotifications(userId, (error, result) => {
            if (error) {
              window.hybrid.errorFunc(error);
            } else {
              window.hybrid.userCompletedPushNotificationPermissionRequest(result || '');
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