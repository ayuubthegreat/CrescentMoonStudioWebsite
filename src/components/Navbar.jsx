import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ButtonBox from "./ButtonBox"
import "./components.css"
import Section from "./Section"
import cmsLogo from "../assets/cmsLogo.png"
import { useState } from "react"
import {logout} from "../slices/userSlice"

export default function Navbar() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState(false);
    const navbarButtonsNames = ["About Us", "Products", "Schedule"]
    const navbarButtonsLinks = ["/about", "/finished-products", "/products-schedule"]
    const {user, isFromExternal} = useSelector((state) => state.user);
    return (
        <>
        <nav className="navbar">
            <Section children={<>
                <img className="title-img" onClick={() => {
                    if (!isFromExternal) {
                        nav('/')
                    }
                    }} src={cmsLogo} width={200}></img>
                </>}></Section>
           {!isFromExternal && (<Section add_class="navbar-large-display" children={<>
                <ButtonBox buttonTextArr={navbarButtonsNames} linkArr={navbarButtonsLinks}></ButtonBox>
                {user && (
                    <div className="navbar-user-profile">
                        <p className="navbar-user-profile-text">Welcome, {user.username}!</p>
                       <button className="navbar-user-profile-button" onClick={() => {
                            dispatch(logout());
                            nav('/');
                        }}>Logout</button>
                    </div>
                )}
                 {!user && (
                    <Link className="navbar-user-profile-button navbar-user-profile-login-button" to="/login">Login</Link>
                )}
                </>}></Section>)}
                
            {!isFromExternal && (<div className="navbar-small-display">
                <button className="navbar-small-display-button" onClick={(e) => {
                    setIsEnabled(!isEnabled);
                }}>=</button>
                <div className="navbar-small-display-menu" style={{display: (isEnabled ? "block" : "none")}}>
                    <ButtonBox buttonTextArr={navbarButtonsNames} linkArr={navbarButtonsLinks} onClick={() => {setIsEnabled(false)}}></ButtonBox>
                    {user && (
                    <div className="navbar-user-profile">
                        <p className="navbar-user-profile-text">Welcome, {user.username}!</p>
                        <button className="navbar-user-profile-button" onClick={() => {nav('/profile')}}>Profile</button>
                        <button className="navbar-user-profile-button" onClick={() => {
                            dispatch(logout());
                            nav('/');
                        }}>Logout</button>
                    </div>
                )}
                {!user && (
                    <button onClick={() => {setIsEnabled(false); nav('/login')}} className="navbar-user-profile-button navbar-user-profile-login-button">Login</button>
                )}
                </div>
            </div>)}
        </nav>
        </>
    )
}