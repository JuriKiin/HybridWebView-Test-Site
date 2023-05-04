let bridge = {
    testAsync: () => {
        Hybrid.testAsync("Hello World", (message) => {
            Hybrid.showToast(message);
        })
    },
    testSync: () => {
        Hybrid.showToast("Hello World!")
    },
    testNetworkError: () => {
        Hybrid.testNetworkError();
    }
}