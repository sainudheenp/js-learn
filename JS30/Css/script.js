const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(this); // Logs the element that triggered the event
    const suffix = this.getAttribute('data-sizing') || ''; // Get suffix if any (e.g., px for spacing/blur)
    console.log(suffix);
    // Update the corresponding CSS variable with the input's value and suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Add event listeners once for all the inputs (outside handleUpdate)
inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
});
