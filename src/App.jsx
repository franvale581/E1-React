import './index.css'
import React, { useEffect } from 'react';
import { FirstHero } from './components/hero';
import { HeaderNav } from './components/Header/header';
import { SecondHero } from './components/Hero-2/hero-2';
import { FooterSection } from './components/Footer/footer';
import { FeaturedSection } from './components/Featured/featured';

function App() {

    useEffect(() => {
    // Animación para el primer hero
    // const heroCard = document.querySelector(".hero-card");

    // const animationInit = () => {
    //   heroCard.classList.add("slide-down");
    //   setTimeout(() => {
    //     heroCard.classList.remove("slide-down");
    //     heroCard.classList.add("vibe");
    //   }, 2000);
    // };

    // animationInit();

    // Animaciones para el header y navbar
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        // Eliminamos la clase active-link de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active-link'));

        // Agregamos la clase al enlace seleccionado
        link.classList.add('active-link');
      });
    });

    // Agregamos un manejador de eventos al documento para cerrar el enlace activo cuando hagamos click en cualquier parte
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.nav-link')) {
        navLinks.forEach(link => link.classList.remove('active-link'));
      }
    });
  });

  return (
    <>
    {/* <FirstHero></FirstHero> */}

    <HeaderNav/>

    <SecondHero/>

    <FeaturedSection/>

    <FooterSection/>

    </>
  )
}

export default App