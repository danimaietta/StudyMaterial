let successCount = 0;
let failureCount = 0;

function isSuccessful() {
    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    
    // If the random value is less than or equal to 0.0098 (0.98% probability)
    if (randomValue <= 0.0098) {
        return true; // Success
    } else {
        return false; // Failure
    }
}

// Call the function to check if it's successful
for(let i=0; successCount === 0; i++){
    if (isSuccessful()) {
        successCount++;
        console.log("Success! You got the rare item! Success count: " + successCount + " Failure count: " + failureCount);
    } else {
        failureCount++;
        console.log("Failure... Try again!");
    }
}
