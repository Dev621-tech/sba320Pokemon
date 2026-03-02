export default function Header({ logo }){
    return(
        <header className="headerContainer">
            {logo && <img src={logo} alt="logo" className="headerLogo" />}
            <h1>Move Index</h1>
        </header>
    )
}