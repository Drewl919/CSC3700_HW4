import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Customers from "./customers/Customers";
import CreateCustomer from "./customers/CreateCustomer";
import Items from "./items/Items";
import CreateItem from "./items/CreateItem";
import EditCustomer from "./customers/EditCustomer";
import EditItem from "./items/EditItem";
import Sales from "./sales/Sales";

function App() {
  return (
    <div>
        <NavBar/>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/customers/add-customer">
                    <CreateCustomer/>
                </Route>
                <Route path="/customers/:id/:name/:email">
                    <EditCustomer/>
                </Route>
                <Route path="/customers">
                    <Customers/>
                </Route>
                <Route path="/items/add-item">
                    <CreateItem/>
                </Route>
                <Route path="/items/:id/:name/:price">
                    <EditItem/>
                </Route>
                <Route path="/items">
                    <Items/>
                </Route>
                <Route path="/sales">
                    <Sales/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
