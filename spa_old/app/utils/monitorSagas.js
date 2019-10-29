export default function monitorSagas(store) {
  // console.log(`monitorSagas()`);
  const allTasks = [];
  const saveRunSaga = store.runSaga;

  store.runSaga = function interceptRunSaga(saga) { // eslint-disable-line no-param-reassign
    const task = saveRunSaga.call(store, saga);
    allTasks.push(task);
    console.log(`interceptRunSaga(), saga:`, saga);
    return task;
  };

  return function done() {
    // console.log(`done(), allTasks:`, allTasks)
    return Promise.all(allTasks.map((t) => {
      // console.log(`t.done, t:`, t);
      t.done;
    }));
  };
}


/**
 * 
 */