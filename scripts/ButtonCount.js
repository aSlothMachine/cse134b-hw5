class Button extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
    }
}

// Define the new element.
customElements.define('button-count', Button);