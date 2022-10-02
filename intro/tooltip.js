
// advantage of using shadowDOM
// global styling does not affect newly created elements

class Tooltip extends HTMLElement {

    #tooltipContainer;
    #tooltipMessage;

    constructor(){
        super();
        this.#tooltipMessage = 'default message';
        // enable shadow dom
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
            #tooltip{
                background-color: black;
                color: white;
                border: 1px solid red;
                display:inline-block;
                padding: 5px 10px;
            }
        </style>
        <span> (?) </span>
        `;
    }

    connectedCallback(){
        if (this.hasAttribute('message')){
            this.#tooltipMessage = this.getAttribute('message');
        }
        // const tooltipIcon = document.createElement('span');
        // tooltipIcon.textContent = ' (?) ';

        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this.#showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this.#hideTooltip.bind(this));
        
        // attach element to shadowDOM
        this.shadowRoot.appendChild(tooltipIcon);

    }


    #showTooltip(){
        this.#tooltipContainer = document.createElement('div');
        this.#tooltipContainer.setAttribute('id', 'tooltip');
        this.#tooltipContainer.textContent = this.#tooltipMessage;

        // attach to shadowDOM
        this.shadowRoot.appendChild(this.#tooltipContainer);

    }

    #hideTooltip(){
        // remove from shadowDOM
        this.shadowRoot.removeChild(this.#tooltipContainer);
    }
    
}

// allows us to register our own custom elements
customElements.define('my-tooltip', Tooltip);
