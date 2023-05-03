import React, {useState,Fragment} from 'react'

//imr para impor react

//sfc para const y armar todo
const Contador = () => {

    //Se pone una variable numero seguido de setNumero para utilizar como la variable, se iguala a usestate que es lo que te va a devolver
    //y entre () el valor inicial en esta caso 0, podria ser boolean, array, objetos
    const [numero,setNumero] = useState(0);

    //Se llama a la variable setNumero para hacer los calculos

    const aumentar = () => {
        console.log('click')
        setNumero(numero + 1);
    }

    return (
        <Fragment>
        <h3>Hola React del componente {numero}</h3>

        {/*Evento onClick seguido de la funcion que creamos aumentar para darle el dinamismo a la pagina*/}

        <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}
 

export default Contador ;

