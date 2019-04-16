import { createBrowserHistory } from 'history';
// but we don't want to be dealing with browserHistory, do we, we want to be dealing with MemoryHistpry, which workis in isomorphic/universal
const history = createBrowserHistory();
export default history;
