import React from 'react';
import Accordion from 'react-bootstrap/Accordion'; 

const Contact = () => {
    return (
        <div className="contdicc">
            <h2>Aquí puedes revisar algunas definciones sobre programación</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Variable</Accordion.Header>
                    <Accordion.Body>
                    Una variable es una posición de memoria donde se puede almacenar u
                    na valor que se usaráen el programa. Es un identificador que puede tomar 
                    diferentes valores durante la ejecución delprograma, dependiendo del 
                    tipo de datos que se le declaro a dicha variable.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Pseudocódigo</Accordion.Header>
                    <Accordion.Body>
                    Es la representación narrativa de los pasos que debe seguir un 
                    algoritmo para darsolución a un problema determinado. El 
                    pseudocódigo utiliza palabras que indican el proceso a realizar.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Constante</Accordion.Header>
                    <Accordion.Body>
                    Son los valores que no pueden ser modificados. Pueden ser de cualquier tipo de datos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Comentarios</Accordion.Header>
                    <Accordion.Body>
                    Pueden aparecer en cualquier parte del programa, mientras 
                    estén situados entre los delimitadores /* comentario */. 
                    Los comentarios son útiles para identificar los elementos 
                    principales de un programa o para explicar la lógica subyacente de estos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Identificador</Accordion.Header>
                    <Accordion.Body>
                    Un identificador es una serie de caracteres formados por letras, dígitos 
                    y el carácter subrayado ( _) que no inicie con dígito, así mismo es el 
                    nombre que damos a todo lo que manipulamos dentro de un programa 
                    (variables, constantes, funciones, etc). Por ejemplo variables, constantes,
                    funciones, tipos definidos por el usuario etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Contact;
