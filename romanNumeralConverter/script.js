document.addEventListener('DOMContentLoaded', function() {
  const numberInput = document.getElementById('number');
  const convertBtn = document.getElementById('convert-btn');
  const output = document.getElementById('output');
  
  convertBtn.addEventListener('click', convertToRoman);
  
  function convertToRoman() {
      const num = parseInt(numberInput.value);
      
      // Validation
      if (isNaN(num)) {
          output.textContent = "Please enter a valid number";
          output.classList.add('error');
          return;
      }
      
      if (num < 1) {
          output.textContent = "Please enter a number greater than or equal to 1";
          output.classList.add('error');
          return;
      }
      
      if (num >= 4000) {
          output.textContent = "Please enter a number less than or equal to 3999";
          output.classList.add('error');
          return;
      }
      
      // Remove error class if validation passes
      output.classList.remove('error');
      
      // Convert to Roman numeral
      const romanNumeral = convertToRomanNumeral(num);
      output.textContent = romanNumeral;
  }
  
  function convertToRomanNumeral(num) {
      const romanNumerals = [
          { value: 1000, numeral: 'M' },
          { value: 900, numeral: 'CM' },
          { value: 500, numeral: 'D' },
          { value: 400, numeral: 'CD' },
          { value: 100, numeral: 'C' },
          { value: 90, numeral: 'XC' },
          { value: 50, numeral: 'L' },
          { value: 40, numeral: 'XL' },
          { value: 10, numeral: 'X' },
          { value: 9, numeral: 'IX' },
          { value: 5, numeral: 'V' },
          { value: 4, numeral: 'IV' },
          { value: 1, numeral: 'I' }
      ];
      
      let result = '';
      let remaining = num;
      
      for (const { value, numeral } of romanNumerals) {
          while (remaining >= value) {
              result += numeral;
              remaining -= value;
          }
      }
      
      return result;
  }
  
  // Add some interactivity
  numberInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          convertToRoman();
      }
  });
});