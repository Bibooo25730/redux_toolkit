import React from "react";
import { createRoot }  from "react-dom/client";
import App from "./pages/App";
import { Provider } from "react-redux";
import { stroe } from "./store/store";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Provider store={stroe}> <App/> </Provider>)
// 将 store 分别传到下面各个组件里面，这样每个组件都能拿到这个store