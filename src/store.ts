import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import themesReducer from "./features/themes/themeSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
  theme: themesReducer,
});

const store = createStore(rootReducer);

export default store;
// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
