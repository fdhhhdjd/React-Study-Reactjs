import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  SearchMain,
  ImgFilter,
  Header,
  Carousels,
  PaginatorPage,
} from "./Import";
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
          <Route path="/carousel">
            <Carousels />
          </Route>
          <Route path="/paginator">
            <PaginatorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
