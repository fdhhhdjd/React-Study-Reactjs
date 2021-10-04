import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  SearchMain,
  ImgFilter,
  Header,
  Carousels,
  PaginatorPage,
  PaginationComponent,
  StudyF8,
  Navbar,
  CheckBox,
} from "./Import";
import Options from "./Page/Options/Options";
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
            {/* <PaginatorPage /> */}
            <PaginationComponent />
          </Route>
          <Route path="/studyF8">
            <StudyF8 />
          </Route>
          <Route path="/navbar">
            <Navbar />
          </Route>
          <Route path="/checkbox">
            <CheckBox />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;