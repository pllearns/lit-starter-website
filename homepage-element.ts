import { LitElement, html } from "lit-element/lit-element";
import { customElement, property } from "lit/decorators";

@customElement('homepage-element')

class HomepageElement extends LitElement {
    @property({ type: String })
    public title = 'Homepage';

    @property({ type: String })
    public description = 'This is a homepage';

    render() {
        return html`
            <h1>${this.title}</h1>
            <p>${this.description}</p>
        `;
    }
}