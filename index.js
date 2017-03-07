import $ from './src/FlipBook';

// // Sample 0 {
// $('#container').FlipBook({
//   pdf: 'books/pdf/FoxitPdfSdk.pdf',
//   template: {
//     html: 'templates/default-book-view.html',
//     styles: [
//       'css/short-black-book-view.css'
//     ],
//     script: 'js/default-book-view.js'
//   }
// });
// // }

// Sample 1 {
function theKingIsBlackPageCallback(n) {
  return {
    type: 'image',
    src: 'books/image/theKingIsBlack/'+(n+1)+'.jpg',
    interactive: false
  };
}

$('#container').FlipBook({
  pageCallback: theKingIsBlackPageCallback,
  pages: 40,
  propertiesCallback: function(props) {
    props.cover.color = 0x000000;
    return props;
  },
  template: {
    html: 'templates/default-book-view.html',
    styles: [
      'css/short-white-book-view.css'
    ],
    script: 'js/default-book-view.js',
    sounds: {
      startFlip: 'sounds/start-flip.mp3',
      endFlip: 'sounds/end-flip.mp3'
    }
  }
});
// }

// // Sample 2 {
// $('#container').FlipBook({
//   pdf: 'books/pdf/CondoLiving.pdf',
//   template: {
//     html: 'templates/default-book-view.html',
//     styles: [
//       'css/white-book-view.css'
//     ],
//     script: 'js/default-book-view.js'
//   }
// });
// // }
//
// // Sample 3 {
// $('#container').FlipBook({
//   pdf: 'books/pdf/TheThreeMusketeers.pdf',
//   propertiesCallback: function(props) {
//     props.page.depth /= 2.5;
//     props.cover.padding = 0.002;
//     return props;
//   },
//   template: {
//     html: 'templates/default-book-view.html',
//     styles: [
//       'css/short-black-book-view.css'
//     ],
//     script: 'js/default-book-view.js'
//   }
// });
// // }
//
// // Sample 4 {
// function preview(n) {
//   return {
//     type: 'html',
//     src: 'books/html/preview/'+(n%3+1)+'.html',
//     interactive: true
//   };
// }
//
// $('#container').FlipBook({
//   pageCallback: preview,
//   pages: 20,
//   propertiesCallback: function(props) {
//     props.sheet.color = 0x008080;
//     props.cover.padding = 0.002;
//     return props;
//   },
//   template: {
//     html: 'templates/default-book-view.html',
//     styles: [
//       'css/black-book-view.css'
//     ],
//     script: 'js/default-book-view.js'
//   }
// });
// // }
