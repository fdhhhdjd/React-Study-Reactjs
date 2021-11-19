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
  Toasts,
  CountDown,
  ClockCountDown,
  Sliders,
} from "./Import";
import CheckFrom from "./Page/CheckFrom/CheckFrom";
import UpdateImg from "./Components/UpdateImg/UpdateImg";
import Start from "./Components/Start/Start";
import ScrollProgress from "./Components/scrollProgress/ScrollProgress";
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
          <Route path="/countdown">
            <div className="countdownMain">
              <CountDown />
            </div>
          </Route>
          <Route path="/clock">
            <ClockCountDown />
          </Route>
          <Route path="/toast">
            <Toasts />
          </Route>
          <Route path="/slider">
            <Sliders />
          </Route>
          <Route path="/updateImg">
            <UpdateImg />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/scrollProgress">
            <ScrollProgress />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
