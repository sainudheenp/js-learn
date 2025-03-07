
function printPattern(n) {
    for (i = 0; i <= n; i++) {
        let line = ''

        for (j = 0; j <= i; j++) {
            line += '*'
        }
        console.log(line)
    }
}

// printPattern(10)

function printNumPattern(n) {

    for (let i = 0; i < n; i++) {
        let row = " ";
        for (j = 0; j <= i; j++) {
            // row+= 

            row += "*"
        }
        console.log(row)
    }
}

// printNumPattern(5)


function upperPyra(n) {
    for (i = 0; i < n; i++) {
        let row = ''
        for (j = 0; j < n - i - 1; j++) {
            row += " "
        }
        for (k = 0; k <= i; k++) {
            row += '* '
        }
        console.log(row)
    }
}
// upperPyra(3)


function upperPyran(n) {
    for (i = 0; i < n; i++) {               // Outer loop: iterates over each row (from 0 to n-1)
        let row = ''                      // Initialize an empty string for the current row
        for (j = 0; j < n - i - 1; j++) {   // First inner loop: adds spaces
            row += " "                    // Append a space; the number of spaces decreases with each row
        }
        for (k = 0; k <= i; k++) {          // Second inner loop: adds stars
            row += '* '                   // Append a star followed by a space; the number of stars increases with each row
        }
        console.log(row)                  // Print the constructed row to the console
    }
}
upperPyran(3)
