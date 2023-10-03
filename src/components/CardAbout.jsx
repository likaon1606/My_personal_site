const CardAbout = () => {
  return (
    <>
      <article className='container-view'>
        <div className='view'>
          <img src='../assets/1.jpg' />
          <div className='mask'>
            <h2>¡Hola!, Soy Ariel F. G.</h2>
            <p>Desarrollador Full Stack</p>
            <a
              href='https://api.whatsapp.com/send?phone=525532604568'
              target='blank'
              className='info'
            >
              Haz clic y hablemos
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardAbout;
