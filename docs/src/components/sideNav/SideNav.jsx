import { useCustomContext } from "../../providers/ContextProvider";
import { Link } from "react-router-dom";
import dwarfFortressIcon from "/Dwarf_Fortress_Icon.svg";
import DropdownButton from "../dropDown/DropdownButton";
import "./SideNav.css";

const SideNav = () => {
  const { isVisible, closeSideNav } = useCustomContext();

  return (
    <nav className={isVisible ? "visible" : "novisible"}>
      <div className="sideNavHeader">
        <img src={dwarfFortressIcon} alt="Dwarf fortress logo" />

        <h1>Ayudas Dwarf Fortress</h1>

        <span className="noTextSelection" id="menuClose" onClick={closeSideNav}>
          &#9932;
        </span>
      </div>

      <div className="links">
        <Link
          to={`/`}
          onClick={closeSideNav}
          className="buttons noTextSelection"
        >
          inicio
        </Link>
        <DropdownButton text="Comandos Dwarf Fortress">
          <Link
            to={"/commands#menu"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Menu
          </Link>
          <Link
            to={"/commands#construir"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Construir
          </Link>
          <Link
            to={"/commands#informacionSobreElMundo"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Información del mundo
          </Link>
          <Link
            to={"/commands#designaciones"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Designaciones
          </Link>
          <Link
            to={"/commands#zonas"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Zonas
          </Link>
          <Link
            to={"/commands#encargos"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Encargos
          </Link>
          <Link
            to={"/commands#depositos"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Depósitos
          </Link>
          <Link
            to={"/commands#talleres"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Talleres
          </Link>
          <Link
            to={"/commands#pared/Suelo/Escalera/Via"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Pared/Suelo/Escalera/Via
          </Link>
          <Link
            to={"/commands#establecerZonasDeTrafico"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Establecer zonas de tráfico
          </Link>
        </DropdownButton>
        <Link
          to={"/commandsStonesense"}
          onClick={closeSideNav}
          className="buttons noTextSelection"
        >
          Comandos de Stonesense
        </Link>
        <DropdownButton text="Guias">
          <Link
            to={"/guides#opcionesDelJuego"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Opciones del juego
          </Link>
          <Link
            to={"/guides#ubicacionDelMapa"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Ubicación del mapa
          </Link>
          <Link
            to={"/guides#movimientoYMenu"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Movimiento y Menú
          </Link>
          <Link
            to={"/guides#primerasAcciones"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Primeras Acciones
          </Link>
          <Link
            to={"/guides#serviciosBasicos"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Servicios Básicos
          </Link>
          <Link
            to={"/guides#comida"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Comida
          </Link>
          <Link
            to={"/guides#depositos"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Depósitos
          </Link>
          <Link
            to={"/guides#talleres"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Talleres
          </Link>
          <Link
            to={"/guides#construcciones"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Construcciones
          </Link>
          <Link
            to={"/guides#zonas"}
            onClick={closeSideNav}
            className="noTextSelection"
          >
            Zonas
          </Link>
        </DropdownButton>
      </div>
    </nav>
  );
};

export default SideNav;
