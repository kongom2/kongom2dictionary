import React, { useState } from "react";
// 페이지 불러오기
import List from "./List";
import Add from "./Add";
import NotFound from "./NotFound";
// 라우터 불러오기
import { Route, Switch } from "react-router-dom";

function App() {
  const [word, setWord] = useState("");

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <List word={word} />
        </Route>
        <Route path="/add" exact>
          <Add word={word} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
