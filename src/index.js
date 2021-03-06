import React from "react";
// 앱화면 불러오기
import App from "./App";
import ReactDOM from "react-dom";
// 라우터 불러오기
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// 리덕스 불러오기
import { Provider } from "react-redux";
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
