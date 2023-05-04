let bridge = {
    testAsync: () => {
        Hybrid.testAsync("Hello, Native!", 'testCallback');
    },
    testSync: () => {
        Hybrid.showToast("Hello World!");
    },
    testCallback: (message) => {
        Hybrid.showToast(message);
    },
}