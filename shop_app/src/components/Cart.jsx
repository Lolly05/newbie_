import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import SignUp  from './SignUp'


function Cart() {
	const [authMode, setAuthMode] = useState("register")

	const changeAuthMode = () => {
	  setAuthMode(authMode === "register" ? <SignUp /> : "register")
	}
	return (
	
	<header>
		
		<nav>
		<ul >
				<li>Hello. <a href="" target='blank' >sign in</a></li>or
				<li><a href='' onClick={changeAuthMode}>register  </a></li>
			</ul>
			</nav>
			
		
		<div >
			<FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",marginLeft:"15px", fontSize:"1.1rem",marginRight:"10px"}} />
		</div>
	</header>
	
  )
}

export default Cart
