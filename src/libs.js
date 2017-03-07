const _$ = GLOBAL_LIBS.jQuery? window.jQuery: require('jquery'),
      _html2canvas = GLOBAL_LIBS.html2canvas? window.html2canvas: require('html2canvas'),
      _THREE = GLOBAL_LIBS.THREE? window.THREE: require('three'),
      _PDFJS = GLOBAL_LIBS.PDFJS? window.PDFJS: require('pdfjs');

export {
  _$ as $,
  _html2canvas as html2canvas,
  _THREE as THREE,
  _PDFJS as PDFJS
};
