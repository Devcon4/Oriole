import { LitElement, css, html, customElement } from 'lit-element';
import { flexHostStyles, globalStyles } from '../globalStyles';
import './navbar.component';
import './controlbar.component';

@customElement('ori-discover')
export class DiscoverPage extends LitElement {
	render() {
		return html`<div class="discover">
			<ori-navbar></ori-navbar>
			<h3>WOW</h3>
			<ori-controlbar></ori-controlbar>
		</div>`;
	}

	static get styles() {
		return [globalStyles, flexHostStyles, css``];
	}
}
