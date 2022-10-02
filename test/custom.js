

class MyButton extends HTMLElement {

    #button;
    #para;
    #show;

    constructor(){
        super();
        this.#show = false;
        this.attachShadow({ mode: 'open' });


        this.shadowRoot.innerHTML = `
            <style>
                #info-box {
                    display: none;
                }
            </style>
            
            <button>Show</button>
            <p id="info-box">
                <slot></slot>
            </p>
        `;

        this.#para = this.shadowRoot.getElementById('info-box');
        this.#button = this.shadowRoot.querySelector('button');
        this.#button.addEventListener('click', this.toggle);

    }

    connectedCallback(){

        if (this.hasAttribute('is-visible')){
            const isVisible = this.getAttribute === 'true' ? true : false;
            this.#show = isVisible;
        }

    }

    toggle = () => {
        this.#show = !this.#show;

        this.#para.style.display = this.#show ? 'block': 'none';
        this.#button.textContent = this.#show ? 'Hide' : 'Show';
    }

}



customElements.define('my-button', MyButton);