var numberToWords = function (num) {
  if (num === 0) {
    return "Zero";
  }

  // Define arrays for units and tens
  const belowTwenty = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  // Define function to handle numbers less than 1000
  function lessThanThousand(num) {
    if (num === 0) {
      return "";
    } else if (num < 20) {
      return belowTwenty[num] + " ";
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + " " + lessThanThousand(num % 10);
    } else {
      return (
        belowTwenty[Math.floor(num / 100)] +
        " Hundred " +
        lessThanThousand(num % 100)
      );
    }
  }

  // Define function to handle main number conversion
  function convert(num) {
    if (num === 0) {
      return "";
    } else if (num < 1000) {
      return lessThanThousand(num);
    } else if (num < 1000000) {
      return (
        convert(Math.floor(num / 1000)) + "Thousand " + convert(num % 1000)
      );
    } else if (num < 1000000000) {
      return (
        convert(Math.floor(num / 1000000)) + "Million " + convert(num % 1000000)
      );
    } else {
      return (
        convert(Math.floor(num / 1000000000)) +
        "Billion " +
        convert(num % 1000000000)
      );
    }
  }

  return convert(num).trim();
};
