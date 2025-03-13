let userInput = prompt( "Please enter your flavors separated by commas");
  console.log(userInput);

  let flavorArray = userInput.split(",");
  console.log("Array of Flavors:", flavorArray);

  let flavorCount = {};
  flavorArray.forEach(function(flavor) {
    if(flavorCount[flavor]) {
        flavorCount[flavor] += 1
    }else {flavorCount[flavor] =1;

    }
  });
  console.log("Flavor Count:", flavorCount);

  console.table(flavorCount);