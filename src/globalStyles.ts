import { css } from 'lit-element';

export const flexHostStyles = css`
	:host {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0px;
	}
`;

export const globalStyles = css`
	.ori-flex {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0px;
	}

	.fill {
		flex: 1;
	}
`;

export const fadeinAnimation = css`
	@keyframes fadein {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;
