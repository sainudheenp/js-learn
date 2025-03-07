// find largest word in a sring

function largest(str) {
  console.log(str);
  console.log(str.split(" "))
  let splstr = str.split(" ");
  console.log(splstr.length);
  let Maxlength = 0;
  let MaxItem = "";
  for (i = 0; i < splstr.length; i++) {
    if (splstr[i].length > Maxlength) {
      Maxlength = splstr[i].length;
      maxitem = splstr[i];
    } else {
      MaxItem = MaxItem;
      Maxlength = Maxlength;
    }
  }
  console.log(maxitem)
  console.log(Maxlength)

}

largest("My Name is Sainudheen");