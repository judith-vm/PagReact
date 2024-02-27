import React, { useEffect } from 'react';
import anime from 'animejs';

const Home = () => {
  useEffect(() => {
    anime({
      targets: 'h1.text-animation', 
      translateX: [-60, 60],
      direction: 'alternate',
      loop: true,
      easing: 'linear'
    });

    anime({
      targets: 'h3',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(100),
      easing: 'easeOutBounce'
    });
  }, []);

  return (
    <div className="homeS">
      <h1 className="text-animation">Bienvenido</h1>
      <br></br>
      <br></br>
      <h3>Para comenzar tus primeros pasos en programación</h3>
      <h3>Puedes dar un vistazo a nuestra barra de navegación</h3>
    </div>
  );
}

export default Home;

