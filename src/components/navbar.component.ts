import { LitElement, css, html, customElement } from 'lit-element';
import { globalStyles } from '../globalStyles';

@customElement('ori-navbar')
export class NavbarComponent extends LitElement {
	render() {
		return html`<div class="navbar">
			<h2>Some navbar!</h2>
			<ul>
				<li><a href="/dashboard">Dashboard</a></li>
				<li><a href="/discover">Discover</a></li>
			</ul>
		</div>`;
	}

	static get styles() {
		return [
			globalStyles,
			css`
				:host {
					backdrop-filter: blur(2px);
				}
			`,
			css`
				.title {
					font-size: 12px;
				}
			`,
		];
	}
}
