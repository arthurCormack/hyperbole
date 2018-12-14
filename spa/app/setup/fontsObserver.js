import FontFaceObserver from 'fontfaceobserver';

// Observe loading of fonts
const CormorantInfantObserver = new FontFaceObserver('Cormorant Infant', {});
const CormorantUprightObserver = new FontFaceObserver('Cormorant Upright', {});
const VidalokaObserver = new FontFaceObserver('Vidaloka', {});
// const AbrilFatfaceObserver = new FontFaceObserver('Abril Fatface', {});
const RobotoObserver = new FontFaceObserver('Roboto Condensed', {});
// const QuincyRegularObserver = new FontFaceObserver('Quincy Regular', {});
// const AddingtonMediumObserver = new FontFaceObserver('Addington Medium', {});
// New Font Tests

// const PlayfairObserver = new FontFaceObserver('Playfair Display', {});
const CrimsonObserver = new FontFaceObserver('Crimson Text', {});
// const CormorantGaramondObserver = new FontFaceObserver('Cormorant Garamond', {});
// const EBGaramondObserver = new FontFaceObserver('EB Garamond', {});
// const SourceSerifObserver = new FontFaceObserver('Source Serif Pro', {});


// const oswaldObserver = new FontFaceObserver('Oswald', {});
// const oswaldObserver = new FontFaceObserver('Osward', {});
//
// Promise.all([loraObserver.load(), oswaldObserver.load()]).then(() => {
//   // console.log('loraObserver and oswaldObserver');
//   document.body.classList.add('fontLoaded');
// }, () => {
//   document.body.classList.remove('fontLoaded');
// });





Promise.all([CormorantInfantObserver.load(), CormorantUprightObserver.load(),
  VidalokaObserver.load(), RobotoObserver.load(),
  CrimsonObserver.load()]).then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});
