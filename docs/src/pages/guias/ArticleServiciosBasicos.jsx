import { Link } from "react-router-dom";

const ArticleServiciosBasicos = () => {
  return (
    <article id="serviciosBasicos" className="text">
      <div className="articleContent">
        <h2>Servicios Básicos</h2>
        <p>
          En la fortaleza cada enano tiene necesidades básicas como comer,
          beber, trabajar y dormir.
        </p>

        <details open is="serviciosBasicos/comida">
          <summary className="bold cursorPointer noTextSelection">
            Comida
          </summary>
          <div className="sangria">
            <p>
              Para la comida y bebida es necesaria la{" "}
              <Link to={"#comida"}>producción de Comida</Link> mediante
              granajas, recolección de plantas silvestres o la cría de animales.
            </p>
          </div>
        </details>

        <details open id="serviciosBasicos/trabajos">
          <summary className="bold cursorPointer noTextSelection">
            Trabajos
          </summary>
          <div className="sangria">
            <p>
              Para el trabajo es necesaria la construcción de los{" "}
              <Link to={"#talleres"}>Talleres</Link> de diferentes industrias
              para los enanos con las profeciones correctas.
            </p>
            <p>
              Para{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Labor?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp&amp;_x_tr_hist=true#Assigning_labors"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                asignar labores
              </a>{" "}
              a un enano seleccionado desde la pantalla principal o desde el
              menú de unidades <code>u</code> se puede entrar a las preferencias{" "}
              <code>p</code> y al menú laborál <code>l</code> para ver que
              trabajos tiene habilitado realizar y poder activarselas o
              desactivarselas con el <code>Enter</code>.
            </p>
          </div>
        </details>

        <details open id="serviciosBasicos/dormitorios">
          <summary className="bold cursorPointer noTextSelection">
            Dormitorios
          </summary>
          <div className="sangria">
            <p>
              Los{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Bedroom?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                Dormitorios
              </a>{" "}
              son consideradas{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Room?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                habitaciones
              </a>{" "}
              donde los enanos pueden descanzar.
            </p>
            <p>
              Para definir un agujero como dormitorio es necesario construir una{" "}
              <Link to={"#construcciones/cama"}>cama</Link> <code>b + b</code> y
              entrando en ella con la <code>q</code> se podrá definir como
              dormitorio pulsando <code>r</code> y con <code>+ / -</code>{" "}
              definir su tamaño. Una vez establecida como dormitorio se puede
              definir a que enano pertenece <code>a</code> o dejarlo que se
              asigne automaticamente.
            </p>
          </div>
        </details>

        <details open id="serviciosBasicos/hospital">
          <summary className="bold cursorPointer noTextSelection">
            Hospital
          </summary>
          <div className="sangria">
            <p>
              El <Link to={"#zonas/hospital"}>Hospital</Link>
            </p>
          </div>
        </details>

        <details open id="serviciosBasicos/Cementerio">
          <summary className="bold cursorPointer noTextSelection">
            Cementerio
          </summary>
          <div className="sangria">
            <p>
              Cuando un enano, mascota o animal muere es necesario tratar con el
              cadaver, ya que dentro de la fortaleza generará{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Miasma?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                Miazma
              </a>{" "}
              o en otros casos bajar la moralidad de los enanos al ver un
              cadaver.
            </p>
            <p>
              Existen varias formas de prevenir que un cadaver se pudra dentro
              de la fortaleza.
            </p>
            <p>
              La más básica de ellas es creando un{" "}
              <Link to={"#zonas/vertedero"}>Vertedero</Link> <code>i + d</code>{" "}
              donde llevar los desechos de animales sacrificados o comida
              podrida, y en caso de un enano sin una tumba designada.
            </p>
            <p>
              La opción más digna para los enanos y sus mascotas es construyendo
              un <Link to={"#construcciones/ataud"}>Ataúd</Link>{" "}
              <code>b + n</code> y al seleccionarla activarla como tumba{" "}
              <code>b</code>.
            </p>
            <p>Con eso podremos:</p>
            <ul>
              <li>
                <code>c</code> Habilitarla/desabilitarla para ciudadanos.
              </li>
              <li>
                <code>p</code> Habilitarla/desabilitarla para mascotas. (por
                defecto desactivada)
              </li>
              <li>
                <code>r</code> Designarla a un enano.
              </li>
            </ul>
          </div>
        </details>
      </div>
    </article>
  );
};

export default ArticleServiciosBasicos;
