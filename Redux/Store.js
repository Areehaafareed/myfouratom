// import { configureStore } from "@reduxjs/toolkit";

// import CartSlice from "./CartSlice";

// export const Store = configureStore({
//   reducer: {
//     CartSlice,
//   },
// });

import { createStore } from "redux";
import { rootReducer } from "./reducers";

export const Store = createStore(rootReducer);
import { configureStore } from "@reduxjs/toolkit";
