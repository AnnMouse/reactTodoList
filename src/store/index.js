import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
// import thunk from 'redux-thunk';
// 通过该方法生成middleware
const sagaMiddleware = createSagaMiddleware();
// applyMiddleware(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  enhancer
  // 表示使用thunk中间件
  // applyMiddleware(thunk
    // 判断是否安装了devtools,如果安装则执行该方法。__REDUX_DEVTOOLS_EXTENSION__也是一个中间件
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
sagaMiddleware.run(mySaga);


export default store;