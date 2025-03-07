// find largest word in a string

function largest(str) {
  let arrayString = str.split(" ");
  console.log(arrayString);

  let largestword = "";
  let largelength = 0;

  arrayString.forEach((element) => {
    if (element.length > largelength) {
      largelength = element.length;
      largestword = element;
    }
  });
  console.log("Largest Word:",largestword,largelength)
}

largest("HEY AM SHIFA");
