import './Sidebar.css';
export function Sidebar({ items }) {
    return (
        <div className='Sidebar-div'>
            <ul className='Sidebar-ul'>
                {items.map((item) => <li className='Sidebar-li'>{item}</li>)}
            </ul>
        </div>
    )
}