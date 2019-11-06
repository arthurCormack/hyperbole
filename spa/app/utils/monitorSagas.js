export default function monitorSagas(store) {
  // console.log(`monitorSagas(), store:`, store);
  const allTasks = [];
  const saveRunSaga = store.runSaga;

  store.runSaga = function interceptRunSaga(saga) { // eslint-disable-line no-param-reassign
    const task = saveRunSaga.call(store, saga);
    allTasks.push(task);
    // console.log(`pushing a task:`, task);
    return task;
  };

  return function done() {
    // console.log(`at the done(), returning a map of Promise.all(allTasks):`, allTasks)
    return Promise.all(allTasks.map((t) => {
      // console.log(`t.done, t:`, t);
      // how do we get the promise to only complete, when it has actually completed?!
      // done ==> toPromise https://github.com/redux-saga/redux-saga/pull/1231/commits/f1c0845cdc53ec1bc021e41dccbe925f99279762
      // t.done;
      return t.toPromise();
    })).then(()=>{
      // console.log(`at the then of monitorSagas done`);
    });
  };
}


/**
 * 
 */