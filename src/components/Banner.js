import '../css/banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "La maison jungle"
    return <div className="lmj-banner">
        <img src={logo} alt="la maison de la jungle" className="lmj-logo" />
        <h1>{title.toUpperCase()}</h1>
    </div>
}

export default Banner;
