import {$, html2canvas, THREE, PDFJS} from './src/libs';
require('./src/'+(ENVIROMENT.debug? '3dflipbook.js': '3dflipbook.min.js'));

export default $;
