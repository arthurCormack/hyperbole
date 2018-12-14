// determineAdsInViewport

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
  // potentialItems.forEach((item, i) => {
  //   if (elementInViewport(item)) {
  //     itemsInViewport.push(item.id);
  //   }
  // });
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
