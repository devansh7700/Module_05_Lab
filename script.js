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

async function fetchCatBreeds() {
    try {
        const response = await fetch('https://catfact.ninja/breeds');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cat breeds:", error);
    }
}
 
fetchCatBreeds().then((data) => console.log(data));
 
