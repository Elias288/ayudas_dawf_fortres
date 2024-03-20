import { Link } from "react-router-dom";

const ArticleMovimientoYMenu = () => {
  return (
    <article id="movimientoYMenu" className="text">
      <div className="articleContent">
        <h2>Movimiento y Menú</h2>
        <p>
          Para movernos por el mapa se pueden utilizar las flechas del teclado{" "}
          <code>← → ↑ ↓</code>, para movernos en el eje Z usaremos el{" "}
          <code>&lt;</code> para subir un nivel y el <code>&gt;</code>
          para bajar un nivel.
        </p>

        <p>
          Con el <code>Tab</code> podremos intercambiar la visualización del
          costado, mostrando un mapa, las{" "}
          <a
            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Menu?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            opciones del menú
          </a>{" "}
          o ambas.
        </p>

        <details className="menu" open>
          <summary className="bold cursorPointer noTextSelection">Menú</summary>
          <div className="sangria line">
            <ul>
              <li>
                <code>a</code>{" "}
                <Link to={"#primerasAcciones/alertas"}>Ver alertas</Link>
              </li>
              <li>
                <code>R</code> Ver habitaciones/edificios
              </li>
              <li>
                <code>t</code> Ver objetos en edificios
              </li>
              <li>
                <code>v</code> Ver unidades
              </li>
              <li>
                <code>u</code> Ver unidades
              </li>
              <li>
                <code>j</code> Ver trabajos
              </li>
              <li>
                <code>r</code> Ver Informes
              </li>
              <li>
                <code>l</code> Ver Lugares y ocupaciones
              </li>
              <li>
                <code>n</code> Ver Nobles y administradores
              </li>
              <li>
                <code>b</code> Construir
              </li>
              <li>
                <code>d</code> Designaciones
              </li>
              <li>
                <code>o</code> Encargos
              </li>
              <li>
                <code>p</code> <Link to={"#depositos"}>Depositos</Link>
              </li>
              <li>
                <code>s</code> Escuadras
              </li>
              <li>
                <code>m</code> Militar
              </li>
              <li>
                <code>c</code> Información sobre el mundo
              </li>
              <li>
                <code>D</code> Acceso al depósito
              </li>
              <li>
                <code>h</code> Saludos
              </li>
              <li>
                <code>H</code> Teclas de acceso rápido
              </li>
              <li>
                <code>i</code> Zonas
              </li>
              <li>
                <code>k</code> Mirar
              </li>
              <li>
                <code>z</code> Estado
              </li>
              <li>
                <code>q</code> Establecer tareas de construcción/prefs
              </li>
              <li>
                <code>N</code> Punto/rutas/notas
              </li>
              <li>
                <code>w</code> Hacer madrigueras
              </li>
              <li>
                <code>tab</code> Mover este menú/mapa
              </li>
            </ul>
          </div>
        </details>
      </div>
    </article>
  );
};

export default ArticleMovimientoYMenu;
