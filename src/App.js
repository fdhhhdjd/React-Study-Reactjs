import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { SearchMain, ImgFilter, Header } from "./Import";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/img">
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
