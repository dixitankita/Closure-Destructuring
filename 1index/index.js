function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count; 
        }
    };
}

const counter = createCounter(); 


const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');


incrementButton.addEventListener('click', function() {
    const updatedCount = counter.increment(); 
    counterDisplay.textContent = updatedCount; 
});
