import './Navigation.css';

export function Navigation({ items }) {
    return (
        <nav>
            <ul className='Nav-ul'>
                {items.map((item) => <li>{item}</li>)}
            </ul>
        </nav>
    )
}