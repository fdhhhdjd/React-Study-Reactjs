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
  Toast,
} from "./Import";
import Options from "./Page/Options/Options";
import CheckFrom from "./Page/CheckFrom/CheckFrom";
import Pdf from "./Components/PDF_react/Pdf";
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
          <Route path="/checkform">
            <CheckFrom />
          </Route>
          <Route path="/pdf">
            <Pdf />
          </Route>
          <Route path="/toast">
            <Toast />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
