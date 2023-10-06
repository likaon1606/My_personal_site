import whatsapp from '../../public/assets/whatsapp2.png';
import gmail from '../../public/assets/gmail.png';
import github from '../../public/assets/github.png';
import linkedin from '../../public/assets/linkedin2.png';

const Nav2 = () => {
  return (
    <div className='container-nav2'>
      <div className='nav2'>
        <a href='https://wa.me/525532604568' target='blank'>
          <img src={whatsapp} alt='whatsapp' />
        </a>
        <a href='mailto:ariel.fg@mexwebdesign.com' target='blank'>
          <img src={gmail} alt='email' />
        </a>
        <a href='https://github.com/likaon1606' target='blank'>
          <img src={github} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/ariel-f-78604898/' target='blank'>
          <img src={linkedin} alt='linkedin' />
        </a>
      </div>
    </div>
  );
};

export default Nav2;
