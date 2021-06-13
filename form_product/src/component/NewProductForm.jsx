
import styled from './styled.css';
import React, {useState, useEffect} from 'react'
import { Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const NewProductForm = () => {

    const [dataForm, setDataForm] = useState({
        title:'',
        price:'',
        description:''

    })

    const history = useHistory()

    const onSubmitHandle = (e) => {
        e.preventDefault();
        console.log('Aqui estoy!')
        axios.post('http://localhost:8000/api/product/new', dataForm)
        .then(() => history.push(""))
        .catch(err => console.log(err) )
    }

    useEffect(() => {
        console.log(dataForm)
    }) 


    return (
        <div className="product-form-container col-8">
            <h1>Nuevo producto GET</h1>
            <Form className="container justify-content-center" onSubmit={onSubmitHandle}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Producto</Form.Label>
                    <Form.Control className="input-control" type="text" placeholder="Ingresa nombre del producto" name="title" value={dataForm.title} onChange={(e) => setDataForm({...dataForm, [e.target.name]: e.target.value})}/>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el precio" name="price" value={dataForm.price} onChange={(e) => setDataForm({...dataForm, [e.target.name]: e.target.value})}/>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la descripción" name="description" value={dataForm.description} onChange={(e) => setDataForm({...dataForm, [e.target.name]: e.target.value})}/>
                </Form.Group>
                <Button variant="primary col-4" type="submit">
                    Crear
                </Button>
            </Form>
        </div>
    )
}

export default NewProductForm
