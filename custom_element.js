alert("Taha was here!");

class centre extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`
    }
}

customElements.define('x-center', centre);

class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", Year);

class Right extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:right">${this.innerHTML}</div>`
    }
}

customElements.define("x-right", Right);

