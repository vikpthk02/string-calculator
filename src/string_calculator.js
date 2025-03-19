class StringCalculator {
    Add(numbers) {
      if (!numbers) return 0;
  
      let delimiter = /,|\n/;
  
      if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+)\n(.*)/);
        if (match) {
          let customDelimiters = match[1];
          numbers = match[2];
  
          customDelimiters = customDelimiters.match(/\[([^\]]+)\]/g) || [customDelimiters];
          customDelimiters = customDelimiters.map(d => d.replace(/\[|\]/g, ""));
          delimiter = new RegExp(customDelimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|"));
        }
      }
  
      let numArray = numbers.split(delimiter).map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  
      let negatives = numArray.filter(num => num < 0);
      if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
      }
  
      return numArray.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
    }
  }
  
  module.exports = StringCalculator;
  