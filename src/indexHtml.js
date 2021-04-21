const makeHtmlAttributes = (attributes) => {
	if (!attributes) {
		return '';
	}
	const keys = Object.keys(attributes);
	// eslint-disable-next-line no-param-reassign
	return keys.reduce(
		(result, key) => (result += ` ${key}="${attributes[key]}"`),
		''
	);
};

/** @type {(options: import('@rollup/plugin-html').RollupHtmlOptions, entryPointWhitelist: string[]) => string} */
export const indexHtml = (
	{ attributes, meta, title, files, publicPath, fileName },
	entryPointWhitelist
) => {
	const scripts = (files.js || [])
		.filter((f) => entryPointWhitelist.some((e) => f.fileName.includes(e)))
		.map(({ fileName }) => {
			const attrs = makeHtmlAttributes(attributes.script);
			return `<script src="${publicPath}${fileName}"${attrs}></script>`;
		})
		.join('\n');
	const links = (files.css || [])
		.map(({ fileName }) => {
			const attrs = makeHtmlAttributes(attributes.link);
			return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
		})
		.join('\n');
	const metas = meta
		.map((input) => {
			const attrs = makeHtmlAttributes(input);
			return `<meta${attrs}>`;
		})
		.join('\n');

	return `
    <!DOCTYPE html>
    <html ${makeHtmlAttributes(attributes.html)}>
      <head>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <meta charset="utf-8">
        <link rel="shortcut icon">
        <base href="/">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
        ${metas}
        <title>${title}</title>
        ${links}
        <style>
          html, body {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin: 0;
            min-height: 100%;
          }
          
          body {  
            --on: inherit;
            --off: ;
            
            --light: var(--on);
            --dark: var(--off);
            
            --oriLightShade: var(--light, var(--ori4)) var(--dark, var(--ori2));
            --oriLightAccent: var(--light, var(--ori5)) var(--dark, var(--ori1));
            --oriMain: var(--light, var(--ori9)) var(--dark, var(--ori9));
            --oriDarkAccent: var(--light, var(--ori2)) var(--dark, var(--ori4));
            --oriDarkShade: var(--light, var(--ori1)) var(--dark, var(--ori5));
            --oriText: var(--light, var(--ori2)) var(--dark, var(--ori4));

            --mdc-theme-primary: var(--oriMain);
            --mdc-theme-secondary: var(--oriDarkAccent);
            --mdc-theme-surface: var(--oriLightAccent);
            --mdc-theme-background: var(--oriLightShade);

            /* Raw are RGB versions. Useful to compose more complex colors ex: rgba(var(--ori0-raw), .2) */
            --ori0-raw: 74, 75, 81;
            --ori1-raw: 86, 87, 94;
            --ori2-raw: 51, 52, 56;
            --ori3-raw: 32, 34, 36;
            --ori4-raw: 240, 247, 252;
            --ori5-raw: 218, 226, 232;
            --ori6-raw: 170, 181, 191;
            --ori7-raw: 242, 79, 19;
            --ori8-raw: 242, 190, 34;
            --ori9-raw: 242, 79, 19;
            --ori10-raw: 242, 79, 19;
            --ori11-raw: 230, 197, 103;
            --ori12-raw: 68, 126, 179;
            --ori13-raw: 161, 205, 68;
            --ori14-raw: 217, 56, 48;
            --ori15-raw: 245, 133, 127;

            /* Dark colors. */
            --ori0: rgb(var(--ori0-raw));
            --ori1: rgb(var(--ori1-raw));
            --ori2: rgb(var(--ori2-raw));
            --ori3: rgb(var(--ori3-raw));

            /* Light colors. */
            --ori4: rgb(var(--ori4-raw));
            --ori5: rgb(var(--ori5-raw));
            --ori6: rgb(var(--ori6-raw));

            /* Primary colors. */
            --ori7: rgb(var(--ori7-raw));
            --ori8: rgb(var(--ori8-raw));
            --ori9: rgb(var(--ori9-raw));
            --ori10: rgb(var(--ori10-raw));
            
            /* Action colors. */
            --ori11: rgb(var(--ori11-raw));
            --ori12: rgb(var(--ori12-raw));
            --ori13: rgb(var(--ori13-raw));
            --ori14: rgb(var(--ori14-raw));
            --ori15: rgb(var(--ori15-raw));
            
            background-color: var(--oriLightShade);
            color: var(--oriText);

            font-family: roboto;

          }
          
          @media (prefers-color-scheme: dark) {
            body {
              --light: var(--off);
              --dark: var(--on);
            }
          }
        </style>
      </head>
      <body>
        <ori-app></ori-app>
        ${scripts}
      </body>
    </html>`;
};
