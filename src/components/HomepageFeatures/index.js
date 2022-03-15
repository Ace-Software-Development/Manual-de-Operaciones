import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flor Imperial',
    imagen: './img/ACE/royal flush.webp',
    description: (
      <>
        Equipo encargado de desarrollar una app compatible con iOS y Android para 
        el Club Campestre el Campanario
      </>
    ),
  },
  {
    title: 'Full House',
    imagen: './img/ACE/Full House.jpg',
    description: (
      <>
        Equipo encargado de crear un sistema de historias de pacientes para automatizar
        los resultados de laboratorio y la consulta con los médicos de la organización NefroVida
      </>
    ),
  },
  {
    title: 'BlackJack',
    imagen: './img/ACE/BlackJack.jpg',
    description: (
      <>
        Equipo encargado del desarrollo de un sistema de control de inventario para la
        empresa Aluminio Monarca.
      </>
    ),
  },
];

function Feature({imagen, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imagen} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}