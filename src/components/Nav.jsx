import '../styles/nav.css';

const Nav = () => {
  return (
    <>
      <input type='checkbox' id='menu-toggle' />
      <label id='trigger' htmlFor='menu-toggle'></label>
      <label id='burger' htmlFor='menu-toggle'></label>
      <ul id='menu'>
        <li>
          <a href='#'>Acerca de mí</a>
        </li>
        <li>
          <a href='#'>Contáctame</a>
        </li>
        <li>
          <a href='#'>Proyectos</a>
        </li>
        <li>
          <a href='#'>Habilidades</a>
        </li>
        <li>
          <a href='#'>Certificaciones</a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
