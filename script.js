function simulateAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async operation complete!");
        }, 2000); // Simulate a 2-second delay
    });
}
 
simulateAsyncOperation().then((message) => {
    console.log(message);
});
