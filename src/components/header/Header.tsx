import React from "react";
import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';
import { Button } from '../Button/Button';

const Header = () => {
	const [showData, setShowData] = useState<Boolean>(false);

	const showListStatistic = () => {
		setShowData(!showData);
	};

	return (
		<div className="header">
			<div className="logo">
				<img src={ logo } alt="logo"/>
			</div>
			<div className="menu">
				<div>
					<a className="linkData" href="#planets">Data</a>
				</div>
				<div className="nav">
					<Button handleClick={ showListStatistic } className="buttonNav" type="button" title="Statistics"/>
					{ showData &&
						<ul className="listData">
							<li className="item">Radius</li>
							<li className="item">Orbita</li>
							<li className="item">Size</li>
						</ul>
					}
				</div>
			</div>
		</div>
	)
}

export default Header;
