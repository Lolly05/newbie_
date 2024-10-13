import React from 'react'
import { useState } from 'react'

 function SignUp() {
	
		const [formData, setFormData] = useState({
		  firstName: '',
		  lastName: '',
		  email: '',
		  password: '',
		});
	  
		const handleChange = (e) => {
		  const { name, value } = e.target;
		  setFormData({ ...formData, [name]: value });
		};
	  
		const handleSubmit = (e) => {
		  e.preventDefault();
		  // Add your signup logic here
		  console.log('Form submitted with data:', formData);
		  // You can send the form data to your backend for processing
		};
	  
		return (
		  <form onSubmit={handleSubmit}>
			<label>
			  First Name:
			  <input
				type="text"
				name="firstName"
				value={formData.firstName}
				onChange={handleChange}
			  />
			</label>
			<br />
			<label>
			  Last Name:
			  <input
				type="text"
				name="lastName"
				value={formData.lastName}
				onChange={handleChange}
			  />
			</label>
			<br />
			<label>
			  Email:
			  <input
				type="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
			  />
			</label>
			<br />
			<label>
			  Password:
			  <input
				type="password"
				name="password"
				value={formData.password}
				onChange={handleChange}
			  />
			</label>
			<br />
			<button type="submit">Sign Up!</button>
		  </form>
		);
	  };
 



export default SignUp