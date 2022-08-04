import './Header.css';
import logo from '../logo.svg';
import { Input } from './Input';

export function Header({ items }) {
    return (
        <header className='Header'>
            <div className='header__container'>
                <img className='Header-img' src={logo} alt='logo' />
                <div className='lista_input'>
                    <ul className='Header-ul'>
                        {items.map((item) => <li className='Header-li'>{item}</li>)}
                    </ul>
                    <div className="Header-input">
                        <Input typeInput="search" placeHolderInput="Search" />
                    </div>
                </div>
            </div>
        </header>
    )
}