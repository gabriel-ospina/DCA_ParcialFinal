export default class RecipeInput extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    };

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=``;

            const title = this.ownerDocument.createElement("h1");
            title.innerText = "Share your recipe";
            this.shadowRoot.appendChild(title);

            const form = this.ownerDocument.createElement("form")
                
                const nameIn = this.ownerDocument.createElement("input")
                nameIn.placeholder = "Name of the recipe"
                form.appendChild(nameIn)

                const ingredIn = this.ownerDocument.createElement("section")
                
                    const ingredient1 = this.ownerDocument.createElement("input")
                    ingredient1.placeholder = "Ingredient 1"
                    ingredIn.appendChild(ingredient1)

                    const ingredient2 = this.ownerDocument.createElement("input")
                    ingredient2.placeholder = "Ingredient 2"
                    ingredIn.appendChild(ingredient2)

                    const ingredient3 = this.ownerDocument.createElement("input")
                    ingredient3.placeholder = "Ingredient 3"
                    ingredIn.appendChild(ingredient3)

                form.appendChild(ingredIn)

                const instructionsIn = this.ownerDocument.createElement("input")
                instructionsIn.placeholder="Instructions"
                form.appendChild(instructionsIn)

            this.shadowRoot.appendChild(form)

            const button = this.ownerDocument.createElement("button");
            button.innerText = "Publish";
            this.shadowRoot.appendChild(button);
        }
    }
}

customElements.define("recipe-input", RecipeInput)