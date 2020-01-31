import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
export const middlewares = [reduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// export default createStore(rootReducer); tak bylo
export default createStoreWithMiddleware(rootReducer);
