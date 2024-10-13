import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Logo() {
  return (
	<div className='logo'>
		<h1><span className='pic'>L</span>&<span className='pic-one'>P</span></h1>
		<form action="">
			<input type="text" 
			placeholder='Search for anything' />
			<FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",position:"absolute",top:"23px",left:"220px"}} />
			<button className='buttonbtn'>Search</button>
		</form>
	  
	</div>
  )
}

export default Logo
