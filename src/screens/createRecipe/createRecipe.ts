export default class CreateRecipeScreen extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    };

    connectedCallback(){
        this.render();
    };

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            const title = this.ownerDocument.createElement("h1");
            title.innerText = "Share your recipe";
            this.shadowRoot.appendChild(title);

            const recipeForm = this.ownerDocument.createElement("recipe-input")
            this.shadowRoot.appendChild(recipeForm)
        }
    }
}

customElements.define("app-create", CreateRecipeScreen)