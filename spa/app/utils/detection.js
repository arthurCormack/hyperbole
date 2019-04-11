export const isClientMobile = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  let mql = window.matchMedia('(max-width: 800px)');

  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && mql.matches ) {
  //     // console.log(`isClientMobile()`, true);
  //     return true;
  // }
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || mql.matches ) {
      // console.log(`isClientMobile()`, true);
      return true;
  }

  // console.log(`isClientMobile()`, false);
  return false;
}

export const isUserAgentBot = () => {
  /* we can only detect this, with window.navigator.userAgent,
  if we are running on the client, because only then will we actually have a window */

  if (typeof window === 'undefined') {
    return null;
  }

  const userAgentString = window.navigator.userAgent.toLowerCase();// make it lowercase to do bot substring detection
  if (userAgentString.indexOf('bot') === -1) {
    // console.log(`isUserAgentBot==>`, false);
    return false;
  }
  // console.log(`isUserAgentBot==>`, true);
  return true;

}



export function elementInViewport(el) {
  // console.log(`elementInViewport`, el, `typeof el==`, typeof el);
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;
  if (height === 0) {
    height = 1;// re-assign it to 1; a hack
  }

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

// basically the same as determineElementsInViewPort, but they don't have to be in the viewport
export function determineElementsInPlay(elementPrefix, stripPrefix = false) {
  if (typeof window === 'undefined') {
    return null;
  }
  let potentialItems = document.querySelectorAll(`[id^="${elementPrefix}"]`);
  let itemsInPlay = [];
  potentialItems = potentialItems !== null ? potentialItems : [];// make it always return an array
  for (let i=0; i<potentialItems.length; i++) {
    let item = potentialItems[i];
    itemsInPlay.push(item.id);
  }
  if (stripPrefix) {
    return itemsInPlay.map((item) => Number(item.replace(elementPrefix, ``)));
  }
  return itemsInPlay;

}

// it might be better to work with refs in react, but o well, this works.
export function determineElementsInViewPort(elementPrefix, stripPrefix = false) {
  // this only works if the ads in question follow a strict naming convention
  // this works on ad unit components, not on ad unit holder containers
  // this is becasue of a couple reasons ... ads don't always appear in ad holders
  // also, becasue of the trict id naming convention requirement, it is better to have a minimum # of places where these things are named, in order to enforce the id naming requirement more easily / reliably.
  // this is the pattern / convention: ad_leaderboard_${this.props.index}
  if (typeof window === 'undefined') {
    return null;
  }
  let potentialItems = document.querySelectorAll(`[id^="${elementPrefix}"]`);
  let itemsInViewport = [];
  potentialItems = potentialItems !== null ? potentialItems : [];// make it always return an array
  if (!potentialItems) {
    return itemsInViewport;
  }
  // now determine what of these things are actually in the viewport, and return those.

  for (let i=0; i<potentialItems.length; i++) {
    let item = potentialItems[i];
      if (elementInViewport(item)) {
        itemsInViewport.push(item.id);
      }
  }

  if (stripPrefix) {
    return itemsInViewport.map((item) => Number(item.replace(elementPrefix, ``)));
  }
  return itemsInViewport;
}

export default determineElementsInViewPort;
