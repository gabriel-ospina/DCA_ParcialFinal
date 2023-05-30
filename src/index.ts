import "./components/export"
import "./screens/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-create');
        this.shadowRoot?.appendChild(something);

        if (this.shadowRoot){
            this.shadowRoot.innerHTML=``;

            switch (appState.screen) {
                case value:
                    
                    break;
            
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)