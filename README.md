# Modal Window Project

This repository contains JavaScript code for implementing modal functionality in web applications. The modal allows users to interact with additional content while maintaining focus on the main page.

## About the Code

The JavaScript code provided in this repository enables the creation of a modal window that can be opened and closed using various triggers. The modal is designed to enhance user experience by providing additional information or functionality without navigating away from the current page.

## Code Explanations

### Version 1:

This code defines a modal functionality where clicking on certain buttons opens a modal window and clicking on the close button or overlay closes it. It selects the modal, overlay, close button, and open modal buttons from the DOM. It then adds event listeners to each open modal button to remove the `hidden` class from the modal and overlay when clicked. Additionally, it adds event listeners to the close button and overlay to add the `hidden` class back to both elements when clicked.

[Play Version 1](https://main--modal-window-version-1.netlify.app/)

### Version 2:

Similar to the first code, this code also defines open and close modal functionality. However, it encapsulates the open and close modal logic in separate functions `openModal` and `closeModal`, respectively. The open modal function removes the `hidden` class from the modal and overlay, while the close modal function adds the `hidden` class back to both elements. Event listeners are added to the open modal buttons to call the `openModal` function when clicked, and to the close button and overlay to call the `closeModal` function.

[Play Version 2](https://main--modal-window-version-2.netlify.app/)

### Version 3:

This code provides the same open and close modal functionality as the previous codes. It also uses separate functions `openModal` and `closeModal` to handle opening and closing of the modal. Additionally, it adds an event listener to the `keydown` event, so that when the user presses the Enter key and the modal is open, it calls the `closeModal` function to close the modal.

[Play Version 3](https://main--modal-window-version-3.netlify.app/)

## Getting Started

To get started with using the modal functionality in your project, simply download or clone this repository to your local machine. You will find the JavaScript files containing the modal logic along with HTML and CSS files for a basic modal setup. Feel free to customize the modal according to your project's requirements.

## Contributions

Contributions to this project are welcome! If you have any suggestions, improvements, or bug fixes, please feel free to open an issue or submit a pull request on GitHub.

## Credits

Special thanks to [Jonas Schmedtmann](https://github.com/jonasschmedtmann) for his wonderful work and inspiration.

## Enjoy the Game!

Feel free to play the game and have fun! If you have any questions or feedback, don't hesitate to reach out.
