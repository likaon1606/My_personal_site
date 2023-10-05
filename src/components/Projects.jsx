import '../styles/components/_projects.scss';

const Projects = () => {
  return (
    <>
      <section className='briefcaf' id='briefcaf'>
        <h1>ALGO DE MI TRABAJO</h1>
        <div id='containerCub'>
          <div id='cub' className='rotate'>
            <div className='face front'>
              <a
                href='https://visionary-kashata-ac233b.netlify.app/'
                target='blank'
              >
                <img src='../assets/1.jpg' alt='form' />
              </a>
            </div>
            <div className='face back'>
              <a
                href='https://cute-starlight-f947f8.netlify.app'
                target='blank'
              >
                <img src='../assets/1.jpg' alt='POKEAPI' />
              </a>
            </div>
            <div className='face left'>
              <a
                href='https://creative-cucurucho-b7a1d7.netlify.app/'
                target='blank'
              >
                <img src='../assets/1.jpg' alt='Rick and Morty' />
              </a>
            </div>
            <div className='face right'>
              <a
                href='https://aesthetic-melba-a29721.netlify.app/'
                target='blank'
              >
                <img src='../assets/1.jpg' alt='pagina sencilla' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
