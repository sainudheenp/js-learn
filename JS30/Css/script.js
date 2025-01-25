const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // console.log(this.name); 
    const suffix = this.getAttribute('data-sizing') || ''; // Get suffix if any (e.g., px for spacing/blur)
    // console.log("suffix",suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // console.log(    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix))
}

// Add event listeners once for all the inputs (outside handleUpdate)
inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
});
