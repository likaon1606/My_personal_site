const CardAbout = () => {
  return (
    <>
      <article className='container-view'>
        <div className='view'>
          <img src='../assets/1.jpg' />
          <h5 className='title-efect'>¡Click Aquí!</h5>
          <div className='mask'>
            <h2>¡Hola!, Soy Ariel.</h2>
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
