import React, { useEffect } from 'react';
import anime from 'animejs';

const About = () => {
    useEffect(() => {
        anime({
            targets: ['h2', 'h4'],
            scale: [0.1, 1],
            delay: anime.stagger(100),
            easing: 'easeInOutQuad',
        });
    }, []); // El array vacío indica que este efecto solo se ejecutará una vez, al montar el componente.

    return (
        <div className="contentPPs">
            <h5>Antes de comenzar a programar es importante conocer algunos conceptos</h5>
            <h2>¿Qué es programación?</h2>
            <div className="contenedor-p">
                <p>La programación refiere a la acción de crear programas o aplicaciones
                    a través del desarrollo de un código fuente, que se basa en el conjunto de
                    instrucciones (algoritmos) que sigue el ordenador para ejecutar un programa.</p>
            </div>
            <h4>Tipos de programación</h4>
            <div className="contenedor-p">
                <div className="contenedor-p2">
                    <p>Programación web: relacionada al desarrollo de sitios y aplicaciones web.</p>
                    <p>Programación móvil: enfocada en el desarrollo de software para dispositivos
                        móviles como celulares y/o tabletas.</p>
                    <p>Arquitectura de software: con la que se establecen las estructuras de un sistema.</p>
                    <p>Ciencia de datos: con la que se recopilan e interpretan datos con el fin de obtener
                        información relevante para un proceso o desarrollo de software específico.</p>
                </div>
            </div>
            <h2>¿Qué es un algoritmo?</h2>
            <div className="contenedor-p">
                <p>Los algoritmos son conjuntos de reglas que indican
                    al ordenador cómo ejecutar una tarea. En realidad, un programa informático es un algoritmo que
                    indica al ordenador qué pasos debe realizar y en qué orden para llevar a cabo una tarea específica.
                    Se escriben utilizando un lenguaje de programación.</p>
            </div>
            <h4>Partes de un algoritmo informático</h4>
            <div className="contenedor-p">
                <div className="contenedor-p2">
                    <p>Input (entrada). Información que damos al algoritmo con la que va a trabajar para ofrecer la solución esperada.</p>
                    <p>Proceso. Conjunto de pasos para que, a partir de los datos de entrada, llegue a la solución de la situación. </p>
                    <p>Output (salida). Resultados, a partir de la transformación de los valores de entrada durante el proceso.</p>
                </div>
            </div>
            <h2>Lenguaje de programación</h2>
            <div className="contenedor-p">
                <p>Un lenguaje de programación es un idioma utilizado por desarrolladores y programadores
                    que permite transformar una serie de comandos e instrucciones escritas
                    en datos y actividades específicas.</p>
            </div>
            <div className="contenedor-p">
                <p>Existen más de 2.500 lenguajes de programación, algunos más conocidos y otros menos.
                    Estos se clasifican en función del nivel de abstracción, desde el lenguaje máquina
                    hasta el lenguaje lógico humano. Por tanto, existen:</p>
                <div className="contenedor-p2">
                    <ul>
                        <li>Lenguajes de bajo nivel: coinciden con el lenguaje máquina y presentan un grado de
                            abstracción escaso o nulo. Por tanto, están orientados «a la máquina» y su finalidad
                            es ser directamente ejecutables por el procesador.</li>
                        <li>Lenguajes de alto nivel: se caracterizan por un alto grado de abstracción y están
                            orientados «al programador»; por tanto, su finalidad es ser más comprensibles para
                            facilitar su uso parte de los desarrolladores.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
