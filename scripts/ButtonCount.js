class ButtonCount extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root.
        let shadow = this.attachShadow({ mode: 'open' });

        // button appearance.
        let button = document.createElement("button");

        // counter variable.
        let counter = 0;

        // set button text.
        button.innerText = `Times Clicked: ${counter}`;

        // append to shadow.
        shadow.appendChild(button);

        // user clicks the button.
        button.addEventListener("click", function () {

            counter++;
            button.innerText = `Times Clicked: ${counter}`;
        });
    }
}

// Define the new element.
customElements.define('button-count', ButtonCount);