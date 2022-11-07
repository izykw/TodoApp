import React from 'react';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const { app, app__inner } = styles;

function App() {
	return (
		<div className={app}>
			<div className={app__inner}>
				<Header/>
				<CardList/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
