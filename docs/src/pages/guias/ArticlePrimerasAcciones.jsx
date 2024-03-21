const ArticlePrimerasAcciones = () => {
  return (
    <article id="primerasAcciones" className="text">
      <div className="articleContent">
        <h2>Primeras acciones</h2>
        <p>
          Una de las primeras acciones que se realizan al comenzar es la tala de
          arboles para obtener madera y el minado para construir nuestra
          fortaleza debajo de la tierra desde el menú de designaciones.
        </p>

        <details id="primerasAcciones/talaDeArboles" open>
          <summary className="bold noTextSelection cursorPointer">
            Tala de Arboles
          </summary>
          <div className="sangria line">
            <p>
              La tala de arboles <code>d + t</code> nos permitirá marcar los
              arboles de donde conseguir{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Wood?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                Madera
              </a>{" "}
              para la construcción de distintos artefactos, al ser seleccionado
              nos permitirá elejir la zona en la que realizarla marcando las dos
              esquinas de la zona a talar.
            </p>
            <p>
              Para está designación es necesario un enano con profeción de{" "}
              <strong>Carpintero</strong>.
            </p>
          </div>
        </details>

        <details id="primerasAcciones/minado" open>
          <summary className="bold noTextSelection cursorPointer">
            Minado
          </summary>
          <div className="sangria line">
            <p>
              El{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Mining?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                Minado
              </a>{" "}
              <code>d + d</code> nos permitirá escarbar en los ejes X Y del
              mundo para construir nuestra fortaleza.
            </p>
            <p>
              Para está designación es necesario un enano con profeción de{" "}
              <strong>Minero</strong>.
            </p>
            <p>Una opcion</p>
          </div>
        </details>

        <details id="primerasAcciones/escaleras" open>
          <summary className="bold noTextSelection cursorPointer">
            Escaleras
          </summary>
          <div className="sangria line">
            <p>
              Las{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Stairs?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                Escaleras
              </a>{" "}
              permiten a los enanos acceder a diferentes nieveles de altura en
              el mundo. Existen 3 tipos de escaleras:
            </p>
            <ol>
              <li>
                <code>d + u</code> Escaleras arriba
              </li>
              <li>
                <code>d + i</code> Escaleras arriba y abajo
              </li>
              <li>
                <code>d + j</code> Escaleras abajo
              </li>
            </ol>
          </div>
        </details>

        <details id="primerasAcciones/recoleccionDePlantas" open>
          <summary className="bold noTextSelection cursorPointer">
            Recolección de plantas
          </summary>
          <div className="sangria line">
            <p>
              La{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Herbalist?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                Recolección de plantas
              </a>{" "}
              <code>d + p</code> probeé a los enanos de plantas y semillas
              silvestres.
            </p>
            <p>
              Para está designación es necesario un enano con profeción de{" "}
              <strong>Herbolario</strong>.
            </p>
          </div>
        </details>

        <details id="primerasAcciones/alertas" open>
          <summary className="bold noTextSelection cursorPointer">
            Alertas
          </summary>
          <div className="sangria line">
            <p>
              Las{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Scheduling?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                Alertas
              </a>{" "}
              <code>a</code> se listan los eventos importantes que suceden en el
              mundo.
            </p>
          </div>
        </details>
      </div>
    </article>
  );
};

export default ArticlePrimerasAcciones;
