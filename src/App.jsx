import StateProvider from "./components/StateProvider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Style import
import "./assets/css/App.css";


// Font awesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


// Pages
import Notes from "./pages/Notes";
import UserNote from "./pages/UserNote";

library.add(fas);

function App() {
  return (
    <StateProvider>
      <Router>
        <ScrollToTop />
          <Switch>
              <Route exact path="/">
                <UserNote />  
              </Route> 
              <Route path="/notes">
                <Notes />  
              </Route>
           
          </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
