// Wait for the entire HTML document to be fully loaded before running the script.
document.addEventListener('DOMContentLoaded', function() {
    // Create a new button element.
    const infoButton = document.createElement('button');
    // Set the text content of the button to "More Info".
    infoButton.textContent = "More Info";
    // Append the newly created button to the div with the id 'introduction'.
    document.querySelector('#introduction').appendChild(infoButton);

    // Add an event listener to the new button for the 'click' event.
    infoButton.addEventListener('click', function() {
        // Display an alert box with a message when the button is clicked.
        alert('More information on web applications!');
    });
});

// Add an event listener to the button with the id 'showImage1' for the 'click' event.
document.getElementById('showImage1').addEventListener('click', function() {
    // Get the HTML elements for both images.
    var img1 = document.getElementById('bodyImage1');
    var img2 = document.getElementById('bodyImage2');
    // Change the display style of img1 to 'block', making it visible.
    img1.style.display = 'block';
    // Change the display style of img2 to 'none', making it invisible.
    img2.style.display = 'none';
});

// Add an event listener to the button with the id 'showImage2' for the 'click' event.
document.getElementById('showImage2').addEventListener('click', function() {
    // Get the HTML elements for both images.
    var img1 = document.getElementById('bodyImage1');
    var img2 = document.getElementById('bodyImage2');
    // Change the display style of img1 to 'none', making it invisible.
    img1.style.display = 'none';
    // Change the display style of img2 to 'block', making it visible.
    img2.style.display = 'block';
});

// Add an event listener to the button with the id 'closeImages' for the 'click' event.
document.getElementById('closeImages').addEventListener('click', function() {
    // Change the display style of both images to 'none', making them both invisible.
    document.getElementById('bodyImage1').style.display = 'none';
    document.getElementById('bodyImage2').style.display = 'none';
});
