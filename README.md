# HybridWebView-Test-Site

The purpose of this repository is to host an easy-to-use testing website used for testing & developing hybrid communication between a native front end and a native-owned WebView. This site is platform agnostic, allowing for development & testing on both iOS and Android.

## Features
The features currently are only several buttons allowing for quick testing of the following communication scenarios:
* Synchronous Communication
* Asynchronous Communication
* Asynchronous Communication resulting in Error
* DOM maniupulation

There are also a few customization options that allow for real-time usecase testing:
* JS endpoint name -- The native front end has the ability (at least on android) to specify the name of the class that's attached to the `window` object. Changing this value allows the developer to test multiple different endpoints without changing any native code.
* Load URL -- This field lets the developer attempt to load any given URL in the webView. This is used to test SecurityOriginPolicies, as well as deeplinks such as `mailto`, `sms`, etc.
