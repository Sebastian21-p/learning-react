import PropTypes, { number } from 'prop-types';

export const FirstApp = ( {tittle, subtittle, name} ) =>{

    // console.log(props);
    

    return(
        <>
        <h1> {tittle}</h1>
        {/* <code>{JSON.stringify(newMessage )}</code> */}
        <p>{subtittle }</p>
        <p>{name}</p>
        </>
)}


FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired, 
    subtittle: PropTypes.string,
}

FirstApp.defaultProps = {
    tittle: 'No hay titulo',
    subtittle :'No hay subtitulo',
    name:'Sebas'
}