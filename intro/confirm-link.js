// extending from build-in elements e.g p , a ...


class ConfirmLink extends HTMLAnchorElement {

    constructor(){
        super();
    }

    connectedCallback(){
        this.addEventListener('click', this.handleClick);
    }

    handleClick = (event) => {
        if (!confirm('Do you want to leave ?')){
            event.preventDefault();
        }
    }

}

// whenever we extend a build-in element ,
// we need to pass a third argument
// { extends: ' (the tag of the element we are extending from'}
customElements.define('my-confirmlink', ConfirmLink, { extends: 'a'});