import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Campanario',
    imagen: "https://realestatemarket.com.mx/images/2021/06-junio/0206/El_Campanario_Alta_Editada.jpg",
    description: (
      <>
        División encargada de desarrollar una app compatible con IOs y Android para 
        el Club Campestre el Campanario
      </>
    ),
  },
  {
    title: 'NefroVida',
    imagen: "https://i1.wp.com/www.gente-bien.mx/wp-content/uploads/2021/07/IMG-20210712-WA0049.jpg?resize=1024%2C678&ssl=1",
    description: (
      <>
        División encargada de crear un sistema de historias de pacientes para automatizar
        los resultados de laboratorio y la consulta con los médicos de la organización NefroVida
      </>
    ),
  },
  {
    title: 'Aluminio Monarca',
    imagen: "https://aluminiomonarca.mx/img/logo.svg",
    description: (
      <>
        División encargada del desarrollo de un sistema de control de inventario para la
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
