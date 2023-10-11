import { createGlobalStyle, css } from 'styled-components';

export const fontStyle = css`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: -1px;
    line-height: 1;
`;

export const buttonLabelStyle = css`
    font-weight: 500;
    letter-spacing: 0;
    font-family: 'Helvetica Neue', sans-serif;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
`;

export const BACKGROUND = '#151515';

export const COLOR_PRIMARY = '#151515';
export const COLOR_PRIMARY_1 = 'black';
export const COLOR_PRIMARY_2 = '#3c3c3c';
export const COLOR_PRIMARY_3 = '#202020';

export const COLOR_SECONDARY = '#ca6d20';
export const COLOR_SECONDARY_1 = '#e28437';
export const COLOR_SECONDARY_2 = '#df6400';

export const lightgrey1 = '#c5c5c5';

export const setCursor = ({ disabled }: { disabled?: boolean }) => {
    return disabled ? 'not-allowed' : 'pointer';
};

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
    min-height: 100%;
    position: relative;
    background-color: #fafafa;
}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: monospace;
    font-size: 1.2rem;
    color: #333;
    background-color: #fafafa;
}

#root {
    width: 100%;
    height: 100%;

    /* Global Size Standards */
    --mobile: 600px;
    --small: 768px;
    --medium: 1024px;
    --large: 1440px;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    font: 1rem;
    font-family: 'Roboto', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

table {
    width: 100%;
}

thead {
    width: 100%;
    color: white;
    background: rgb(27, 27, 27);
    font-size: 14px;
}

tr {
    width: 100%;
}

td,
.header__item {
    flex: 1 1 20%;
    text-align: center;
}

.header__item {
    text-transform: uppercase;
}

.filter__link {
    color: white;
    text-decoration: none;
    position: relative;
    display: inline-block;
}

`;
