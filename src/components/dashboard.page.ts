import { LitElement, css, html, customElement } from 'lit-element';
import { flexHostStyles, globalStyles } from '../globalStyles';
import './navbar.component';

@customElement('ori-dashboard')
export class DashboardPage extends LitElement {
	render() {
		return html`<div class="dashboard"><ori-navbar></ori-navbar></div>`;
	}

	static get styles() {
		return [globalStyles, flexHostStyles, css``];
	}
}
