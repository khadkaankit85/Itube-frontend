import Itube from './Itube'
import sandwitch from '../images/sandwitch.svg'
import Searchbar from './Searchbar'
import './header.css'

const Header = () => {
    return (
        <div className="header" >
            <div className="logo sandwitch" >
                <img src={sandwitch} alt="sandwitch" />
            </div>
            <Itube />
            <Searchbar />

        </div>
    )
}

export default Header
