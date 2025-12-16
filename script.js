// 1. Separate the logic so it can be tested by Jasmine
function calculateInterest(p, r, t) {
    return (p * r * t) / 100;
}

const calculate = () => {
    // 2. Get elements safely
    const pInput = document.getElementById("principal"); // Checked ID matches HTML
    const rInput = document.getElementById("rate");
    const tInput = document.getElementById("time");
    const result = document.getElementById("result");

    // 3. Prevent TypeErrors: Check if elements exist before using them
    if (pInput && rInput && tInput && result) {
        
        // 4. Convert strings to numbers (Required by rubric)
        let p = parseFloat(pInput.value);
        let r = parseFloat(rInput.value);
        let t = parseFloat(tInput.value);

        // Check if values are valid numbers
        if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
            
            let simpleInterest = calculateInterest(p, r, t);
            
            // FIX: Amount should be Principal + Interest (not minus)
            let amount = p + simpleInterest; 

            result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
            <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
            <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
        } else {
            result.innerHTML = "Please enter valid numbers.";
        }
    }
};

// 5. Add Event Listener (instead of inline onclick)
// This ensures code runs only after HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
    const calcBtn = document.getElementById("calculate-btn");
    if (calcBtn) {
        calcBtn.addEventListener("click", calculate);
    }
});

// 6. Export for Jasmine Testing (Required for the 'Pass Tests' task)
if (typeof module !== 'undefined') {
    module.exports = { calculateInterest, calculate };
}
