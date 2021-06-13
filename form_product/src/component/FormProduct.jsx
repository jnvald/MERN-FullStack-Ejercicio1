import React from 'react'
import {useState, useEffect} from 'react';
import {Formulario, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './FormularioStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './InputValidator';
import axios from 'axios';


const FormProduct = () => {

    const [nombre, cambiarNombre] = useState({campo: '', Valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', Valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', Valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
    const [dataForm, setDataForm] = useState({
        title:'',
        price:'',
        description:''
    })

    const onSubmitHandler = (e) => {

        if(
			nombre.valido === 'true' &&
			precio.valido === 'true' &&
			descripcion.valido === 'true' && 
			ContenedorTerminos
		){ 
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarPrecio({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});

			//... 
		} else {
			cambiarFormularioValido(false);
		}
        e.preventDefault();
        console.log('Llegue')
        axios.post('http://localhost:8000/api/product/new', dataForm)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            }
        
    useEffect(() => {
        console.log(dataForm)
    })
	
	const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
		precio: /^[0-9,$]{3,12}$/, //
		descripcion: /^[a-zA-ZÀ-ÿ\s]{4,40}$/ // Letras y espacios, pueden llevar acentos.
	}

    

    return (
        <main>
			<h1>Formulario de productos</h1>
			<Formulario onSubmit={onSubmitHandler}>
				<Input 
				estado={nombre}
				cambiarEstado={cambiarNombre}
				tipo="text"
                value={dataForm.title}
				name="title"
                onChange={(e) => setDataForm({...dataForm, [e.target.title]: e.target.value})}
				label="Nombre"
				placeholder="Ingrese su nombre"
				leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
				expresionRegular={expresiones.nombre}
				/>
				<Input 
				estado={precio}
				cambiarEstado={cambiarPrecio}
				tipo="text"
                value={dataForm.price}
				name="price"
                onChange={(e) => setDataForm({...dataForm, [e.target.price]: e.target.value})}
				label="Precio"
				placeholder="Ingrese el precio"
				leyendaError="El precio tiene que ser de 4 a 8 digitos y solo puede contener numeros, letras y guion bajo."
				expresionRegular={expresiones.precio}
				/>
				<Input 
				estado={descripcion}
				cambiarEstado={cambiarDescripcion}
				tipo="text"
                value={dataForm.description}
                onChange={(e) => setDataForm({...dataForm, [e.target.description]: e.target.value})}
				label="Descripción del producto"
				placeholder="Ingrese una descrición"
				name="description"
				leyendaError="Debe contener como mínimo 4 digitos."
				expresionRegular={expresiones.descripcion}
				/>
			
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado> 
			</Formulario>
		</main>
	);
	
}

export default FormProduct
