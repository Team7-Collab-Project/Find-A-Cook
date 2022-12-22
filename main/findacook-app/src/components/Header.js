import Button from './Button'
const Header = () => {
    return (
        <header>
            <img id="logo" src="./images/logo-new-edit-01.png"/>
            <div id="btnGroup">
                <Button id="loginBtn" text='Login' onClick="login.js"/>
                <Button id="RegBtn" text='Register' onClick="register.js"/>
                <Button id="guestBtn" text='Continue as Guest' onClick="guest.js"/>
            </div>
            
        </header>    
    )
}
export default Header
