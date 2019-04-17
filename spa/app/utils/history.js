// import { isServer } from 'utils/detection';
// import { createBrowserHistory, createMemoryHistory } from 'history';
import { createMemoryHistory } from 'history';
// but we don't want to be dealing with browserHistory, do we, we want to be dealing with MemoryHistpry, which workis in isomorphic/universal
// const history = createBrowserHistory();
// const history = isServer ? createMemoryHistory() : createBrowserHistory();
export const history = createMemoryHistory();
export default history;
