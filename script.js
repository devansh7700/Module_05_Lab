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
 
function getSelectedFactCount() {
    const factCountSelect = document.getElementById('factCount');
    const selectedValue = factCountSelect.value;
    console.log("Selected number of facts:", selectedValue); 
    return selectedValue;
}

async function displayCatFacts() {
    console.log("displayCatFacts function called!"); 
    const factCount = getSelectedFactCount();
    const factsContainer = document.getElementById('factsContainer');
    factsContainer.innerHTML = ''; 
 
    try {
        console.log("Fetching cat facts..."); 
        const response = await fetch(`https://catfact.ninja/facts?limit=${factCount}`);
        console.log("API Response:", response); 
 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
 
        const data = await response.json();
        console.log("Data received:", data); 
 
        if (data.data && data.data.length > 0) {
            data.data.forEach((fact) => {
                const factElement = document.createElement('p');
                factElement.textContent = fact.fact;
                factsContainer.appendChild(factElement);
            });
        } else {
            factsContainer.textContent = "No facts found.";
        }
    } catch (error) {
        console.error("Error fetching cat facts:", error);
        factsContainer.textContent = "Failed to load cat facts. Please try again later.";
    }
}
 
const samuraiPizzaCats = {
    leader: "Speedy Cerviche",
    members: 3,
    base: {
        location: "Little Tokyo",
        name: "Pizza Cat Restaurant",
    },
    catchphrase: "It's cheese time!",
};
 
const { leader, base: { location: baseLocation } } = samuraiPizzaCats;
console.log(`Leader: ${leader}, Location: ${baseLocation}`);
 