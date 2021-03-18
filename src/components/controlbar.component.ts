import { LitElement, css, html, customElement } from 'lit-element';
import { globalStyles } from '../globalStyles';

@customElement('ori-controlbar')
export class ControlbarComponent extends LitElement {
	render() {
		return html`<div class="controlbar"><h2>Control!</h2></div>`;
	}

	static get styles() {
		return [globalStyles, css``];
	}
}
