import './Artigo.css';
export function Artigo() {
    return (
        <div className='Div-principal'>
            <div className="Artigo-img" >
                <img alt='imagem' src="https://dummyimage.com/500x250/fff/"></img>
            </div>
            <div className="Artigo-p-div">
                <p className='Artigo-p'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    )
}