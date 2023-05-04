let bridge = {
    testAsync: () => {
        Hybrid.testAsync("Hello, Native!", 'bridge.testCallback', 'string');
    },
    testSync: () => {
        Hybrid.showToast("Hello World!");
    },
    testCallback: (message) => {
        Hybrid.showToast(message);
    },
}