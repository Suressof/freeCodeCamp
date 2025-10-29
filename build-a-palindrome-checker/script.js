document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');

    function isPalindrome(str) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        // Check if the cleaned string is a palindrome
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    function checkPalindrome() {
        const inputValue = textInput.value.trim();
        
        if (!inputValue) {
            alert('Please input a value');
            return;
        }
        
        const isPal = isPalindrome(inputValue);
        
        // Update result display
        resultDiv.textContent = `${inputValue} is ${isPal ? '' : 'not '}a palindrome`;
        
        // Add appropriate class for styling
        resultDiv.classList.remove('palindrome', 'not-palindrome');
        resultDiv.classList.add(isPal ? 'palindrome' : 'not-palindrome');
    }

    // Event listeners
    checkBtn.addEventListener('click', checkPalindrome);

    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPalindrome();
        }
    });
});