import dwarfFortressLogo from "/Dwarf_Fortress_Icon.svg";
import githubLogo from "/github-142-svgrepo-com.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <address>
        <a
          href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Main_Page?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
          className="external"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={dwarfFortressLogo} alt="Dwarf Fortress logo" />
          Dwarf Fortress wiki
        </a>

        <a
          href="https://github.com/Elias288/ayudas_dawf_fortress"
          className="external"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={githubLogo} alt="Github logo" />
          Github
        </a>
      </address>
      <small>No Copyright</small>
    </footer>
  );
};

export default Footer;
