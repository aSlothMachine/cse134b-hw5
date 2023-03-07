class ButtonCount extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root.
        let shadow = this.attachShadow({ mode: 'open' });

        // button appearance.
        let button = document.createElement("button");

        // counter variable.
        let counter = document.createElement("counter"); //may not need counter tbh

        // set button text.
        counter.innerText = 0;
        button.innerText = `Times Clicked: ${counter.innerText}`;

        // append to shadow.
        shadow.appendChild(button);
        // shadow.appendChild(counter); dont need
        
        // user clicks the button.
        button.addEventListener("click", function() {
            counter.innerText = Number.parseInt(counter.innerText, 10) + 1;
            button.innerText = `Times Clicked: ${counter.innerText}`;
        });
    }
}

// Define the new element.
customElements.define('button-count', ButtonCount);