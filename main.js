let bridge = {
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