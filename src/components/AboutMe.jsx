import CardAbout from './CardAbout';

const AboutMe = () => {
  return (
    <div className='about'>
      <div className='title'>
        <CardAbout />
        <h1>Ariel Fuentes García</h1>
        <hr className='hr-title' />
        <h4>Desarrollador Full Stack</h4>
      </div>
      <div className='description'>
        <p>
          Mi amor por la programación se refleja en cada línea de código que
          escribo. Mi objetivo es no solo escribir código, sino también crear
          soluciones impactantes que impulsen el éxito de los proyectos en los
          que participo.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
