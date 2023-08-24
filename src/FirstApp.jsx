import PropTypes from 'prop-types'

//No es permitido enviar objetos como un react child.

export const FirstApp = ({title, subtitle, name}) => {    
    return ( 
        //Esto es un fragment: <> </>        
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>My First React App</h3> 
            
            {/*Esto si se puede porque se le pasa el elemento del objeto*/}
            <p>Hello World!!! My name is {name}</p>

        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "No hay Título",
    subtitle: 'No hay subtitulo',
    name: "Katherine"
}