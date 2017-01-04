import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';


export default initState => {

  return createStore(
    reducers,
    initState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
}
