import { useCustomContext } from "../../providers/ContextProvider";
import dwarfFortresIcon from "/Dwarf_Fortress_Icon.svg";
import "./Header.css";

const Header = () => {
  const { openSideNav } = useCustomContext();

  return (
    <header>
      <img src={dwarfFortresIcon} alt="Dwarf fortress logo" />
      <h1>Ayudas Dwarf Fortress</h1>

      <span className="noTextSelection" id="menuOpen" onClick={openSideNav}>
        &#9776;
      </span>
    </header>
  );
};

export default Header;
