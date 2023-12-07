import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Profile from "./components/Profile";

function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='about' element={<About/>}></Route>
                <Route path='products' element={<Products/>}>
                    <Route index element={<FeaturedProducts/>}/>
                    <Route path='featured' element={<FeaturedProducts/>}/>
                    <Route path='new' element={<NewProducts/>}/>
                </Route>
                <Route path='profile' element={<Profile/>}></Route>
                <Route path='orderSummary' element={<OrderSummary/>}></Route>
                <Route path='users' element={<Users/>}>
                    <Route path=':id' element={<UserDetails/>} />
                </Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
