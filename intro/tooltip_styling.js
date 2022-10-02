
class Tooltip extends HTMLElement {

    #tooltipContainer;
    #tooltipMessage;

    constructor(){
        super();
        this.#tooltipMessage = 'default message';
    }

    connectedCallback(){
        if (this.hasAttribute('message')){
            this.#tooltipMessage = this.getAttribute('message');
        }
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?) ';
        // console.log(this);
        tooltipIcon.addEventListener('mouseenter', this.#showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this.#hideTooltip.bind(this));
        this.appendChild(tooltipIcon);

    }


    #showTooltip(){
        this.#tooltipContainer = document.createElement('div');
        // styling
        this.#tooltipContainer.style.backgroundColor = 'black';
        this.#tooltipContainer.style.color = 'white';
        this.#tooltipContainer.style.border = '1px solid white';
        this.#tooltipContainer.style.color = 'white';
        this.#tooltipContainer.style.display = 'inline-block';

        
        
        this.#tooltipContainer.textContent = this.#tooltipMessage;
        this.appendChild(this.#tooltipContainer);

    }

    #hideTooltip(){
        this.removeChild(this.#tooltipContainer);
    }
    
}

// allows us to register our own custom elements
customElements.define('my-tooltip', Tooltip);