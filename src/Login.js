import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import Alert from './Alert';
import {LoginUser, RegisternUser} from './Actions/user'
import {Container} from '@bootstrap-styled/v4'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from 'styled-components'


const LoginSchema = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required().min(6),
	first_name: yup.string(),
	last_name: yup.string(),
	email: yup.string().email()
  });

const StyledDiv = styled.div` 
    background-color:${props => props.theme.main};
    border: ${props => props.theme.primary};
    color: ${props => props.theme.txt_secondary};
    width: 33%;
    height:100%;
    border-radius: .5rem;
    justify-content: center;
	text-align: right;
	 padding-right: 8rem;
`

const StyledInnerDiv = styled.div` 
    background-color:${props => props.theme.main};
    border: ${props => props.theme.primary};
    color: ${props => props.theme.txt_secondary};
    height:100%;

`
const Button = styled.button`
  font-size: 1em;
  margin: 1rem 0;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.txt_secondary};
  background: ${props => props.theme.bg};
`;

function Login(){
	const dispatch = useDispatch()
	const history = useHistory();
	const [ activeView, setActiveView ] = useState('login');
	let apiError = useSelector(st => st.user.errors)
	const [ loginInfo, setLoginInfo ] = useState({
		username   : '',
		password   : '',
		first_name : '',
		last_name  : '',
		email      : '',
	});
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(LoginSchema)
	  });

	function setLoginView(){
		setActiveView('login');
	}

	function setSignupView(){
		setActiveView('signup');
	}

	function setLogin(data){
		dispatch(LoginUser(data))
	}

	function registerUser(data){
		dispatch(RegisternUser(data))
	}
	function onSubmit(evt){
		

		let data;

		if (activeView === 'signup') {
			// these fields aren't req'd---pass undefined, not empty string
			data = {
				username   : loginInfo.username,
				password   : loginInfo.password,
				first_name : loginInfo.first_name || undefined,
				last_name  : loginInfo.last_name || undefined,
				email      : loginInfo.email || undefined
			};
			registerUser(data)
			apiError ? history.push('/login') : history.push('/') 
			
		} else {
			data = {
				username : loginInfo.username,
				password : loginInfo.password
			};
			setLogin(data)
			apiError ? history.push('/login') : history.push('/') 
		}

		
		
	}

	function handleChange(e){
		const { name, value } = e.target;
		setLoginInfo(l => ({
			...l,
			[name] : value
		}));
	}

	let loginActive = activeView === 'login';

	const signupFields = (
		<div>
			<StyledInnerDiv>
			
			<div className="form-group">
				<label> First name </label>
				<input
					name="first_name"
					className="form-control"
					value={loginInfo.first_name}
					onChange={handleChange}
					ref={register}
				/>
				{errors.first_name && <p>{errors.first_name.message}</p>}
			</div>
			<div className="form-group">
				<label> Last name </label>
				<input
					name="last_name"
					className="form-control"
					value={loginInfo.last_name}
					onChange={handleChange}
					ref={register}
				/>
				{errors.last_name && <p>{errors.last_name.message}</p>}
			</div>
			<div className="form-group">
				<label> Email </label>
				<input
					type="email"
					name="email"
					className="form-control"
					value={loginInfo.email}
					onChange={handleChange}
					ref={register}
				/>
				{errors.email && <p>{errors.email.message}</p>}
			</div>
			</StyledInnerDiv>
		</div>
	);
	return (
		<Container className="text-left">
		<StyledDiv>
		{apiError ? (
			<Alert type="danger" messages={apiError} />
				  ) : null}
		<div className="Login">
			<div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
				<div className="">
					<div className="btn-group">
						<Button className={`btn btn-primary ${loginActive ? 'active' : ''} `} onClick={setLoginView}>
							Login
						</Button>
						<Button className={`btn btn-primary ${loginActive ? '' : 'active'} `} onClick={setSignupView}>
							Sign up
						</Button>
					</div>
				</div>
				<div className="card">
					<div className="card-body p-0">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-group">
								<label> Username </label>
								<input
									name="username"
									className="form-control"
									value={loginInfo.username}
									onChange={handleChange}
									ref={register}
								/>
								{errors.username && <p>{errors.username.message}</p>}
							</div>
							<div className="form-group">
								<label> Password </label>
								<input
									type="password"
									name="password"
									className="form-control"
									value={loginInfo.password}
									onChange={handleChange}
									ref={register}
								/>
								{errors.password && <p>{errors.password.message}</p>}
							</div>
							{loginActive ? '' : signupFields}
							<Button type="submit" className="btn btn-primary text-center " onSubmit={handleSubmit(onSubmit)}>
								Submit
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
		</StyledDiv>
		</Container>
	);
}

export default Login;
