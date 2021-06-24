import StateProvider from "./components/StateProvider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Style import
import "./assets/css/App.css";

// Pages
import UserNote from "./pages/UserNote";

function App() {
  return (
    <StateProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          {/*This route is /add/note but I am using / for test purpose  */}
          <Route exact path="/">
            <UserNote />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
