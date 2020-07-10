import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/redux/reducers/index';

const initializeStore = () => {
  const middlewares = [
    thunkMiddleware,
  ];
  const middleware = applyMiddleware(...middlewares);

  return createStore(
    reducer,
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(middleware)
      : middleware,
  );
};

export const wrapper = createWrapper(initializeStore);
