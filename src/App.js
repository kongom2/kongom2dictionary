import React from "react";
// 페이지 불러오기
import List from "./List";
import Add from "./Add";
// 라우터 불러오기
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <List />
      </Route>
      <Route path="/add" exact>
        <Add />
      </Route>
    </div>
  );
}

export default App;
