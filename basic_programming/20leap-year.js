function leapYear(year) {
  console.log("hello");
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leap year");
  } else {
    console.log("Not an leap year");
  }
}
leapYear(2024);

// 25
// 10
// 50
isSecureContext("OK");