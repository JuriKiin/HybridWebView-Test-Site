let endpointName = "endpoint";

//Web functions
let callAsync = (userId) => {
    userId(userId, (result) => {
        let message = result != null ? result : "Error"
        window[endpointName].showToast(message)
    });
}

let callAsyncError = (userId) => {
    asyncError(userId, (result) => {
        let message = result != null ? result : "Error"
        window[endpointName].showToast(message)
    });
}

let callSync = () => {
    window[endpointName].showToast("Hello World!");
}

let removeDOM = () => {
    document.querySelector('.loader').remove();
}

//Customization Functions

function updateEndpointName() {
    endpointName = document.getElementById("endpoint").value;
    console.log(endpointName);
}

function loadUrl() {
    window.location.href = document.getElementById('url').value;
}


//Injected JS functions

window.async = (userId, callback) => {
    //if using web, web provides implementation here
    //if using mobile, modile will override/inject implementation
    console.log("If you see this, we are not on mobile.")
}

window.asyncError = (userId, callback) => {
    console.log("If you see this, we are not on mobile.");
}