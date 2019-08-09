import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clapped from '../components/Clapped';
import StartPage from '../components/StartPage';
import StartGame from '../components/StartGame';
import Custom from '../components/Custom';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Clapped} exact={true} />
			<Route path="/start" component={StartPage} />
			<Route path="/stage" component={StartGame} />
			<Route path="/custom" component={Custom} />
		</Switch>
	</BrowserRouter>
	);

export default AppRouter;