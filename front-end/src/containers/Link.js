import React, {Component} from 'react';
import {createLink} from "../store/actions/actions";
import {connect} from "react-redux";

import {apiURL} from "../constants";
import './Link.css';

class Link extends Component {

	state = {
		originalURL: ''
	};

	inputChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	submitHandler = event => {
		event.preventDefault();

		this.props.createLink(this.state)
	};

	render() {
		return (
			<div className='Link'>
				<h1>Shorten your link!</h1>
				<form onSubmit={this.submitHandler}>
					<input
						className="input"
						type="text"
						name="originalURL"
						placeholder="Enter URL here"
						value={this.state.originalURL}
						onChange={this.inputChangeHandler}
						required
					/>
					<div>
						<button
							className="btn"
							type="submit"
						>
							Shorten!
						</button>
					</div>
				</form>

				{this.props.shortURL &&
					<div>
						<h4>Your link now looks like this:</h4>
						<a
							href={apiURL + this.props.shortURL}
						>
							{apiURL + this.props.shortURL}
						</a>
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	shortURL: state.shortURL
});

const mapDispatchToProps = dispatch => ({
	createLink: linkData => dispatch(createLink(linkData))
});


export default connect(mapStateToProps, mapDispatchToProps)(Link);