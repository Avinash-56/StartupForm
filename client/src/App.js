import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import { Provider } from "react-redux";
import store from "./store";
import IncubatorLogin from "./components/auth/IncubatorLogin";
import UserLogin from "./components/auth/UserLogin";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Startup from "./components/startup/Startup";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import StartupForm from "./components/startup/StartupForm";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import Startups from "./components/startups/Startups";
import StartupWithId from "./components/startups/StartupWithId";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Alert />

          <Route exact path="/" component={Landing}></Route>
          <Switch>
            <Route exact path="/login" component={UserLogin}></Route>
            <Route exact path="/admin-login" component={IncubatorLogin}></Route>
            <Route exact path="/register" component={Register}></Route>
            <PrivateRoute
              exact
              path="/user-dashboard"
              component={Dashboard}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/startup"
              component={Startup}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/startup/form"
              component={StartupForm}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/admin-dashboard"
              component={AdminDashboard}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/startups"
              component={Startups}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/startups/:id"
              component={StartupWithId}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
