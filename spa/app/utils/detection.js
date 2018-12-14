import { msg } from 'utils/msg';

export const isClientMobile = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  let mql = window.matchMedia('(max-width: 750px)');
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && mql.matches ) {
      // console.log(`isClientMobile()`, true);
      return true;
  }
  // console.log(`isClientMobile()`, false);
  return false;
}
