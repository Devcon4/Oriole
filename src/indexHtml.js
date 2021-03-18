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
        ${metas}
        <title>${title}</title>
        ${links}
        <style>
          body {  
            --on: inherit;
            --off: ;
            
            --light: var(--on);
            --dark: var(--off);
            
            --oriLightShade: var(--light, var(--ori2)) var(--dark, var(--ori0));
            --oriLightAccent: var(--light, var(--ori3)) var(--dark, var(--ori1));
            --oriMain: var(--light, var(--ori7)) var(--dark, var(--ori7));
            --oriDarkAccent: var(--light, var(--ori4)) var(--dark, var(--ori0));
            --oriDarkShade: var(--light, var(--ori5)) var(--dark, var(--ori1));
            
            /* Dark colors. */
            --ori0: #4A4B51;
            --ori1: #56575E;
            --ori2: #333438;
            --ori3: #393C40;

            /* Light colors. */
            --ori4: #E3F2FF;
            --ori5: #CCDAE6;
            --ori6: #AAB5BF;

            /* Primary colors. */
            --ori7: #F29422;
            --ori8: #F2BE22;
            --ori9: #F24F13;
            --ori10: #F24F13;
            
            /* Action colors. */
            --ori11: #E6C567;
            --ori12: #447EB3;
            --ori13: #A1CD44;
            --ori14: #D93830;
            --ori15: #F5857F;
            
            background-color: var(--oriLightShade);
            color: var(--oriMain);
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
