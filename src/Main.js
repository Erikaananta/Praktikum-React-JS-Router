import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import List from './List'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import Pegawai from './pages/Pegawai'


class Main extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/list" component={List} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/cart" component={Cart} />
                <Route path="/pegawai" component={Pegawai} />
            </Switch>
        )
    }
}
export default Main;
