import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import CreateScreen from './Screens/CreateScreen'

import {RutaPrivada} from './Components/RutaPrivada'
import DetailScreen from "./Screens/DetailScreen";
import EditScreen from './Screens/EditScreen'

function App() {
	return (
		<Router>
      <Header />
      <Switch>
        <RutaPrivada exact path='/' component={HomeScreen} />
        <Route path='/login' component={LoginScreen} />
        <RutaPrivada  path='/create' component={CreateScreen} />
        <RutaPrivada  path='/detail/:id' component={DetailScreen} />
        <RutaPrivada  path='/edit/:id' component={EditScreen} />
      </Switch>
			<Footer />
		</Router>
	);
}

export default App;
