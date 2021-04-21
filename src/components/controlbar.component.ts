import { LitElement, css, html, customElement, property } from 'lit-element';
import { flexHostStyles, globalStyles } from '../globalStyles';
import '@material/mwc-icon-button';
import '@material/mwc-slider';
import '@material/mwc-icon';

type PlayStates = 'play' | 'pause';

@customElement('ori-controlbar')
export class ControlbarComponent extends LitElement {
	@property()
	playState: PlayStates = 'pause';

	get isPlaying() {
		return this.playState === 'play';
	}

	constructor() {
		super();
	}

	togglePlayStateEvent = (override?: 'play' | 'pause') => () => {
		this.playState = override ?? this.isPlaying ? 'pause' : 'play';
	};

	render() {
		return html`<div class="controlbar">
			<div class="top-bar">
				<div class="center-content">
					<mwc-icon-button
						class="small-icon"
						icon="fast_rewind"
					></mwc-icon-button>
					<mwc-icon-button
						@click="${this.togglePlayStateEvent()}"
						class="primary-icon"
						icon="${this.isPlaying
							? 'pause_circle_filled'
							: 'play_circle_filled'}"
					></mwc-icon-button>
					<mwc-icon-button
						class="small-icon"
						icon="fast_forward"
					></mwc-icon-button>
				</div>
				<div class="bottom-bar">
					<mwc-slider
						class="playback-slider"
						max="315"
						value="250"
					></mwc-slider>
				</div>
			</div>
			<div class="left-content">
				<mwc-icon class="volume-icon">volume_mute</mwc-icon>
				<mwc-slider class="volume-slider" max="100" value="30"></mwc-slider>
				<mwc-icon class="volume-icon">volume_up</mwc-icon>
			</div>
		</div>`;
	}

	static get styles() {
		return [
			globalStyles,
			css`
				:host {
					position: sticky;
					bottom: 0;
				}

				.controlbar {
					display: flex;
					justify-content: center;

					overflow: hidden;
					background: var(--light, rgba(var(--ori5-raw), 0.9))
						var(--dark, rgba(var(--ori3-raw), 0.9));
					backdrop-filter: blur(2px);
					box-shadow: rgb(0 0 0 / 10%) 0px -4px 10px 0px,
						rgb(0 0 0 / 5%) 0px -4px 3px -1px;
					border-top: var(--light, 1px solid rgba(255, 255, 255, 0.2))
						var(--dark, 1px solid rgba(100, 100, 100, 0.2));
				}

				.center-content {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.top-bar {
					flex: 1;
					padding-top: 12px;
					display: flex;
					flex-direction: column;
				}

				.bottom-bar {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.left-content {
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 48px;
				}

				.primary-icon {
					padding-left: 12px;
					padding-right: 12px;
					--mdc-icon-button-size: 48px;
					--mdc-icon-size: 48px;
				}

				.small-icon {
					--mdc-icon-button-size: 28px;
					--mdc-icon-size: 24px;
				}

				.playback-slider {
					width: 50%;
				}

				.volume-slider {
					padding: 0 12px;
				}

				.volume-icon {
				}
			`,
		];
	}
}
