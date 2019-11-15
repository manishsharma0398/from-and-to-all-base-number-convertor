document.querySelector("form").addEventListener("submit", convert);

const fromInputValue = document.querySelector("#fromInput");
const fromSelect = document.querySelector("#fromSelect");
const toSelect = document.querySelector("#toSelect");

function convert(e) {
  e.preventDefault();

  removeErrors();

  if (fromSelect.value == 1 && toSelect.value == 10) {
    let result = binaryToDecimalConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 1 && toSelect.value == 8) {
    let result = binaryToOctalConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 1 && toSelect.value == 16) {
    let result = binaryToHexadConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 10 && toSelect.value == 1) {
    let result = decimalToBinaryConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 8 && toSelect.value == 1) {
    let result = octalToBinaryConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 16 && toSelect.value == 1) {
    let result = hexadToBinaryConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 10 && toSelect.value == 8) {
    let result = decimalToOctalConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 10 && toSelect.value == 16) {
    let result = decimalToHexadConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 8 && toSelect.value == 10) {
    let result = octalToDecimalConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 16 && toSelect.value == 10) {
    let result = hexadToDecimalConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 16 && toSelect.value == 8) {
    let result = hexadToOctalConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value == 8 && toSelect.value == 16) {
    let result = octalToHexadConvert(fromInputValue.value);
    printValue(result);
  }

  if (fromSelect.value === toSelect.value) {
    printValue(fromInputValue.value);
  }

  if (
    fromInputValue.value == undefined ||
    fromInputValue.value == null ||
    fromInputValue.value == ""
  ) {
    fromInputValue.classList.add("is-invalid");
  }

  if (fromSelect.value == 100) {
    fromSelect.classList.add("is-invalid");
  }

  if (toSelect.value == 100) {
    toSelect.classList.add("is-invalid");
  }
}

function toDecimal(num, base) {
  let newNum;

  if (base != 16) {
    newNum = num
      .split("")
      .reverse()
      .join("");
  } else {
    newNum = num.split("");
    forHex(newNum);
    newNum = newNum.reverse();
  }

  let final = 0;
  for (let i = 0; i < newNum.length; i++) {
    const bin = +(newNum[i] * Math.pow(`${base}`, `${i}`));
    final += bin;
  }

  return final;
}

function binaryToDecimalConvert(binaryNo) {
  let result = toDecimal(binaryNo, 2);
  return +result;
}

function fromDecimal(decimalNo, base) {
  let remainder = [];
  let decimal = +decimalNo;
  let convertedNumber;

  if (decimal === 0) {
    remainder = 0;
    return remainder;
  } else {
    while (decimal >= 1) {
      if (decimal % base == 0) {
        decimal = +(decimal / base);
        remainder.push("0");
      } else {
        remainder.push(`${decimal % base}`.toString());
        decimal = +Math.floor(+(decimal / base));
      }
    }
  }
  if (base != 16) {
    convertedNumber = remainder.reverse().join("");
    return convertedNumber;
  } else {
    convertedNumber = remainder.reverse();
    forHex(convertedNumber);
    convertedNumber = convertedNumber.join("");
    return convertedNumber;
  }
}

function decimalToBinaryConvert(decimalNo) {
  let result = fromDecimal(decimalNo, 2);
  return result;
}

function binaryToOctalConvert(binaryNo) {
  const octal = parseInt(binaryNo, 2).toString(8);
  return octal;
}

function binaryToHexadConvert(binaryNo) {
  const hex = parseInt(binaryNo, 2).toString(16);
  return hex;
}

function octalToBinaryConvert(octalNo) {
  let octal = octalNo.split("");
  let m = [];
  for (let i = 0; i < octal.length; i++) {
    let n = decimalToBinaryConvert(octal[i]);
    if (n >= 10 && n < 100) {
      m.push(`0${n}`);
    } else if (n < 10) {
      m.push(`00${n}`);
    } else {
      m.push(n);
    }
  }
  return m.join("");
}

function hexadToBinaryConvert(hexadNo) {
  let hex = hexadNo.split("");
  forHex(hex);

  let m = [];
  for (let i = 0; i < hex.length; i++) {
    let n = decimalToBinaryConvert(hex[i]);
    if (n >= 100 && n < 1000) {
      m.push(`0${n}`);
    } else if (n >= 10 && n < 100) {
      m.push(`00${n}`);
    } else if (n < 10) {
      m.push(`000${n}`);
    } else {
      m.push(n);
    }
  }
  return m.join("");
}

function decimalToOctalConvert(decimalNo) {
  let result = fromDecimal(decimalNo, 8);
  return +result;
}

function decimalToHexadConvert(decimalNo) {
  let result = fromDecimal(decimalNo, 16);
  return result;
}

function octalToDecimalConvert(octalNo) {
  let result = toDecimal(octalNo, 8);
  return +result;
}

function hexadToDecimalConvert(hexadNo) {
  let result = toDecimal(hexadNo, 16);
  return result;
}

function hexadToOctalConvert(hexadNo) {
  const octal = parseInt(hexadNo, 16).toString(8);
  return octal;
}

function octalToHexadConvert(octalNo) {
  const octal = parseInt(octalNo, 8).toString(16);
  return octal;
}

function printValue(convertedValue) {
  document.querySelector("#toResult").value = convertedValue;
}

function removeErrors() {
  document.querySelector("#toResult").value = "";
  fromSelect.classList.remove("is-invalid");
  fromInputValue.classList.remove("is-invalid");
  toSelect.classList.remove("is-invalid");
}

function forHex(alteredArray) {
  alteredArray.forEach((arr, i) => {
    switch (arr) {
      case "a":
        alteredArray.splice(i, 1, "10");
        break;
      case "10":
        alteredArray.splice(i, 1, "a");
        break;

      case "b":
        alteredArray.splice(i, 1, "11");
        break;
      case "11":
        alteredArray.splice(i, 1, "b");
        break;

      case "c":
        alteredArray.splice(i, 1, "12");
        break;
      case "12":
        alteredArray.splice(i, 1, "c");
        break;

      case "d":
        alteredArray.splice(i, 1, "13");
        break;
      case "13":
        alteredArray.splice(i, 1, "d");
        break;

      case "e":
        alteredArray.splice(i, 1, "14");
        break;
      case "14":
        alteredArray.splice(i, 1, "e");
        break;

      case "f":
        alteredArray.splice(i, 1, "15");
        break;
      case "15":
        alteredArray.splice(i, 1, "f");
        break;

      default:
        break;
    }
  });
}
