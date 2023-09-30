import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import './index.css'
const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						<p className="logo"><img src="https://media.istockphoto.com/id/1304222161/vector/infinity-bicycle-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=Pb06hOLKIgqkkBvApBCV4JkIHHiZH6zTlzcNCgo9mrk="
								alt="website-bike-logo" width="60px">
							</img>
						</p>
					</NavLink>
					<NavLink to="/about" style={({ isActive }) => ({
						color: isActive ? '#fff' : '#545e6f',
						background: isActive ? '#7600dc' : '#f0f0f0',
					})}>
						About
					</NavLink>
					<NavLink to="/contact" style={({ isActive }) => ({
						color: isActive ? '#fff' : '#545e6f',
						background: isActive ? '#7600dc' : '#f0f0f0',
					})}>
						Contact Us
					</NavLink>
					<NavLink to="/blogs" style={({ isActive }) => ({
						color: isActive ? '#fff' : '#545e6f',
						background: isActive ? '#7600dc' : '#f0f0f0',
					})}>
						Blogs
					</NavLink>
					<NavLink to="/sign-up" style={({ isActive }) => ({
						color: isActive ? '#fff' : '#545e6f',
						background: isActive ? '#7600dc' : '#f0f0f0',
					})}>
						Sign Up
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
