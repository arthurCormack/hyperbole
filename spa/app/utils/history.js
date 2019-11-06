
import { isServer } from 'utils/detection';
import { createBrowserHistory, createMemoryHistory } from 'history';
// but we don't want to be dealing with browserHistory, do we, we want to be dealing with MemoryHistpry, which workis in isomorphic/universal
export const history = isServer ? createMemoryHistory() : createBrowserHistory();

export default history;
