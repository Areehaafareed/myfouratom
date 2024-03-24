<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { rootReducer } from "./reducers";
import CartSlice from "./CartSlice";

export const Store = configureStore({
  reducer: {
    CartSlice,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import { rootReducer } from "./reducers";
// import CartSlice from "./CartSlice";

// // Use configureStore from redux toolkit
// const reduxToolkitStore = configureStore({
//   reducer: {
//     CartSlice,
//   },
// });

// // Access the Redux store instance from redux toolkit
// const mergedStore = reduxToolkitStore.getState();

// // Use createStore from redux with your existing rootReducer
// const legacyStore = createStore(rootReducer);

// // Merge the state from the Redux toolkit store into the createStore store
// legacyStore.dispatch({
//   type: "MERGE_STATE",
//   payload: reduxToolkitStore.getState(),
// });

// // Now, use mergedStore as your store in other files
// export const Store = legacyStore;
=======
// store.js
import { createStore } from 'redux';
import { rootReducer } from './reducers';

export const Store = createStore(rootReducer);import { configureStore } from "@reduxjs/toolkit";

// import CartSlice from "./CartSlice";

// export const Store = configureStore({
//   reducer: {
//     CartSlice,
//   },
// });
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
