let bridge = {
    testAsync: () => {
        Hybrid.testAsync("Hello, Native!", 'bridge.testCallback');
    },
    testSync: () => {
        Hybrid.showToast("Hello World!");
    },
    testCallback: (message) => {
        Hybrid.showToast(message);
    },
}