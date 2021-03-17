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
	.bn-flex,
	html,
	body {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0px;
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
