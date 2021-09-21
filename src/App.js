import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { SearchMain, ImgFilter } from "./Import";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ImgFilter />
          </Route>
          <Route path="/search">
            <SearchMain />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
