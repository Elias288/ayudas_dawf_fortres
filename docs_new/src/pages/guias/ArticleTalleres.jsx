const ArticleTalleres = () => {
  return (
    <article id="talleres" className="text">
      <div className="articleContent">
        <h2>Talleres</h2>
        <p>
          En los{" "}
          <a
            rel="noopener noreferrer"
            className="external"
            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
            target="_blank"
          >
            Talleres
          </a>{" "}
          <code>b + w</code> es donde los enanos toman las materias prima y las
          procesan para fabricar proudctos terminados.
        </p>
        <p>
          Casi todos los talleres comparten la mecánica de fabricación (excepto
          la carnicería y el taller de agricultura), dentro del taller:
        </p>
        <ul>
          <li>
            <code>a</code> Agregar una nueva tarea (max: 10)
          </li>
          <li>
            <code>+ -</code> Seleccionar tarea
          </li>
          <li>
            <code>c</code> Cancelar la tarea
          </li>
          <li>
            <code>p</code> Promover tarea
          </li>
          <li>
            <code>n</code> Realizar tarea urgentemente
          </li>
          <li>
            <code>r</code> Repetir tarea
          </li>
          <li>
            <code>s</code> Suspender tarea
          </li>
        </ul>

        <p>Los talleres son:</p>
        <fieldset id="talleres/comida">
          <legend className="noTextSelection">Comida</legend>

          <details id="talleres/comida/tallerDeAgricultura" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + w</code> <strong>Taller de Agricultura</strong>
            </summary>
            <div className="sangria line">
              <p>
                En el{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Farmer%27s_workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  taller de Agricultura
                </a>{" "}
                un enano
                <strong>granjero</strong> podrá realizar las siguientes
                actividades:
              </p>

              <ul>
                <li>
                  <code>p</code> Procesar plantas: fabricar hilo de las plantas.
                </li>
                <li>
                  <code>l</code> Procesar plantas (barril): fabricar jarabe de
                  las plantas.
                </li>
                <li>
                  <code>v</code> Procesar plantas (vial): fabricar unguento.
                </li>
                <li>
                  <code>c</code> Producir queso: fabricar queso con cualquier
                  leche.
                </li>
                <li>
                  <code>m</code> Ordeñar animal: extraer leche de animales si se
                  cuenta con animales productores de leche.
                </li>
                <li>
                  <code>s</code> Esquilar animal: extrae lana de las alpacas,
                  llamas y ovejas.
                </li>
                <li>
                  <code>S</code> Procesar lana: fabricar hilo de la lana o pelo
                  de criaturas.
                </li>
                <li>
                  <code>b</code> Procesar plantas (bolsa): fabricar hojas
                  comestibles dentro de una bolsa.{" "}
                </li>
              </ul>
            </div>
          </details>
          <details id="talleres/comida/pescaderia" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + h</code> <strong>Pescadería</strong>
            </summary>
            <div className="sangria line">
              <p>
                En la{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Fishery?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Pescadería
                </a>{" "}
                un enano
                <strong>limpiador de pescados</strong> podrá procesar todo lo
                que se obtenga de la pesca. El procesamiento de peces crudos
                está activado por defecto, se puede pausar con la <code>s</code>{" "}
                o cancelar con la <code>c</code>.
              </p>
              <p> Sus opciones son:</p>
              <ul>
                <li>
                  <code>p</code> Procesar peces crudos.
                </li>
                <li>
                  <code>e</code> Extracto de peces crudos.
                </li>
                <li>
                  <code>f</code> Capturar un pez vivo.
                </li>
              </ul>
            </div>
          </details>
          <details id="talleres/comida/destileria" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + l</code> <strong>Destilería</strong>
            </summary>
            <div className="sangria line">
              <p>
                La{" "}
                <a
                  rel="noopener noreferrer"
                  className="external"
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Still?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                >
                  destilería
                </a>{" "}
                de alcohol permite a un enano
                <strong>cervecero</strong> fabricar su propio alchol utilzando
                las plantas cosechadas.
              </p>
              <p>Sus opciones son:</p>
              <ul>
                <li>
                  <code>e</code> Elaborar extracto de plantas.
                </li>
                <li>
                  <code>b</code> Elaborar bebida a partir de plantas.
                </li>
                <li>
                  <code>f</code> Elaborar bebida a partir de fruta.
                </li>
                <li>
                  <code>m</code> Elaborar hidromiel.
                </li>
              </ul>
              <p>
                Es necesario contar con barriles vacios u ollas grandes
                disponibles para preparar y almacenar lo producido.
              </p>
              <p>
                Cada planta produce 5 unidades de alcohol. Al usar las plantas
                para producir alcohol se conserva la semilla.
              </p>
            </div>
          </details>
          <details id="talleres/comida/carniceria" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + u</code> <strong>Carnicería</strong>
            </summary>
            <div className="sangria line">
              <p>
                En la{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Butcher%27s_shop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Carnicería
                </a>{" "}
                un enano
                <strong>carnicero</strong> podrá sacrificar animales para
                producir carne y huesos.
              </p>
              <p>
                A diferencia de otros talleres para sacrificar el animal existen
                2 formas:
              </p>
              <ol>
                <li>
                  Ir al menú de unidades con la <code>v</code>, seleccionar al
                  animal y precionar
                  <code>p + s</code> para marcarlo.
                </li>
                <li>
                  Entrando a la lista de animales en el menú de estado{" "}
                  <code>z</code>, ir seleccionar al animal y precionar{" "}
                  <code>b</code> para marcarlo.
                </li>
              </ol>
              <p>
                Una vez marcado el anima a sacrificar será llevado a la
                carnicería donde se extraerá la carne y los huesos.
              </p>
            </div>
          </details>
          <details id="talleres/comida/cocina" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + z</code> <strong>Cocina</strong>
            </summary>
            <div className="sangria line">
              <p>
                En la{" "}
                <a
                  rel="noopener noreferrer"
                  className="external"
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Kitchen?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                >
                  Cocina
                </a>{" "}
                un enano <strong>cocinero</strong> podrá cocinar comidas
                preparadas y convertir la grasa de los animales en sebo.
              </p>
              <p>Hay tres tipos de alimentos a cocinar:</p>
              <ul>
                <li>
                  Una <strong>comida fácil</strong> utiliza dos ingredientes y
                  el resultado serán galletas.
                </li>
                <li>
                  Una <strong>buena comida</strong> utiliza tres ingredientes y
                  dará como resultado guisos.
                </li>
                <li>
                  Una <strong>comida abundante</strong> utiliza cuatro
                  ingredientes y resultará en asados.
                </li>
              </ul>
            </div>
          </details>
          <details id="talleres/comida/quern" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + q</code> <strong>Quern</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
          <details id="talleres/comida/piedraDeMolino" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + M</code> <strong>Piedra de Molino</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
        </fieldset>

        <fieldset id="talleres/basicos">
          <legend className="noTextSelection">Básicos</legend>

          <details id="talleres/basicos/tallerDeCarpinteria" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + c</code> <strong>Taller de Carpintería</strong>
            </summary>
            <div className="sangria line">
              <p>
                En el{" "}
                <a
                  rel="noopener noreferrer"
                  className="external"
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Carpenter%27s_workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                >
                  taller de Carpinterí
                </a>{" "}
                un enano <strong>carpintero</strong>
                puede fabricar objetos de madera.
              </p>
              <p>Sus opciones son:</p>
              <ul>
                <li>Fabricar escudo de madera</li>
                <li>Fabricar hebilla de madera</li>
                <li>Fabricar una lanza de entrenamiento de madera</li>
                <li>Fabricar espada de entrenamiento de madera</li>
                <li>Fabricar un hacha de entrenamiento de madera</li>
                <li>
                  <code>V</code> Fabricar barril de madera.
                </li>
                <li>
                  <code>o</code> Fabricar bloques de madera.
                </li>
                <li>
                  <code>e</code> Fabricar un cubo de madera
                </li>
                <li>
                  <code>p</code> Fabricar una trampa de madera para animales.
                </li>
                <li>
                  <code>j</code> Fabricar una jaula de madera
                </li>
                <li>
                  <code>a</code> Fabricar un soporte de armadura de madera.
                </li>
                <li>
                  <code>b</code> Fabricar cama
                </li>
                <li>
                  <code>c</code> Fabricar una silla de madera .
                </li>
                <li>
                  <code>k</code> Fabricar un ataúd de madera
                </li>
                <li>
                  <code>d</code> Fabricar puerta de madera.
                </li>
                <li>
                  <code>l</code> Fabricar compuerta de madera
                </li>
                <li>
                  <code>H</code> Fabricar tapa de escotilla de madera
                </li>
                <li>
                  <code>G</code> Fabricar rejilla de madera
                </li>
                <li>
                  <code>f</code> Fabricar un gabinete de madera .
                </li>
                <li>
                  <code>n</code> Fabricar un contenedor de madera
                </li>
                <li>
                  <code>h</code> Fabricar cofre de madera
                </li>
                <li>
                  <code>w</code> Fabricar un estante para armas de madera.
                </li>
                <li>
                  <code>t</code> Fabricar mesa de madera
                </li>
                <li>Fabricar un enorme sacacorchos de madera .</li>
                <li>Fabricar una bola de madera con púas</li>
                <li>Fabricar una amenazante punta de madera .</li>
                <li>Fabricar un carro minero de madera</li>
                <li>Fabricar carretilla de madera</li>
                <li>Fabricar una escalera de mano de madera</li>
                <li>Fabricar estantería de madera</li>
                <li>Fabricar pedestal de madera</li>
                <li>Fabricar una sección de tubería de madera</li>
                <li>Fabricar una férula de madera</li>
                <li>Fabricar una muleta de madera.</li>
                <li>Fabricar pieza de instrumento</li>
                <li>Fabricar vitrina</li>
              </ul>
            </div>
          </details>

          <details id="talleres/basicos/tallerDeAlbañilería" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + m</code> <strong>Taller de Albañilería</strong>
            </summary>
            <div className="sangria line">
              <p>
                En el{" "}
                <a
                  rel="noopener noreferrer"
                  className="external"
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Mason%27s_workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                >
                  taller de Albañilería
                </a>{" "}
                un enano <strong>albañil</strong> puede fabricar objetos de
                piedra.
              </p>
              <p>Sus opciones son:</p>
              <ul>
                <li>
                  <code>a</code> Fabricar soporte de armadura
                </li>
                <li>
                  <code>b</code> Fabricar bloques de roca
                </li>
                <li>
                  <code>c</code> Fabricar trono de roca
                </li>
                <li>
                  <code>p</code> Fabricar ataúd de roca
                </li>
                <li>
                  <code>d</code> Fabricar puerta de roca
                </li>
                <li>
                  <code>l</code> Fabricar compuerta de roca
                </li>
                <li>
                  <code>H</code> Fabricar escotilla de roca
                </li>
                <li>
                  <code>G</code> Fabricar rejilla de roca
                </li>
                <li>
                  <code>f</code> Fabricar gabinete de roca
                </li>
                <li>
                  <code>h</code> Fabricar cofre de roca
                </li>
                <li>
                  <code>u</code> Fabricar estatua de roca
                </li>
                <li>
                  <code>Alt+s</code> Fabricar losa de roca
                </li>
                <li>
                  <code>t</code> Fabricar nesa de roca
                </li>
                <li>
                  <code>w</code> Fabricar estante de armas de roca
                </li>
                <li>
                  <code>q</code> Fabricar roca Quern
                </li>
                <li>
                  <code>m</code> Fabricar roca Piedra de molino
                </li>
                <li>Fabricar librero de roca</li>
                <li>Fabricar pedestal de roca</li>
                <li>Fabricar altar de roca</li>
              </ul>
            </div>
          </details>

          <details id="talleres/basicos/tallerDeJoyería" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + j</code> <strong>Taller de Joyería</strong>
            </summary>
            <div className="sangria line">
              <p>
                En elñ{" "}
                <a
                  rel="noopener noreferrer"
                  className="external"
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Jeweler%27s_workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                >
                  taller de Joyería
                </a>{" "}
                un enano <strong>joyero</strong> puede cortar gemas o se
                encrustar gemas en muebles, herramientas u objetos para darles
                mas valor.
              </p>
              <p>Sus opciones són:</p>
              <ul>
                <li>
                  <code>c</code> Cortar gemas
                </li>
                <li>
                  <code>e</code> Incrustar gemas
                </li>
              </ul>
              <ul></ul>
            </div>
          </details>

          <details id="talleres/basicos/tallerDeArtesanos" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + r</code> <strong>Taller de Artesanos</strong>
            </summary>
            <div className="sangria line">
              <p>
                En el{" "}
                <a
                  rel="noopener noreferrer"
                  className="external"
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Craftsdwarf%27s_workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                >
                  taller de Artesanos
                </a>{" "}
                un enano <strong>artesano</strong> puede fabricar objetos de
                comercio o trabajos especializados como munición, tazas,
                instrumentos, jugetes, etc.
              </p>
            </div>
          </details>

          <details id="talleres/basicos/tallerMecánico" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + t</code> <strong>Taller Mecánico</strong>
            </summary>
            <div className="sangria line">
              <p>
                En el{" "}
                <a
                  rel="noopener noreferrer"
                  className="external"
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Mechanic%27s_workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                >
                  taller Mecánico
                </a>{" "}
                un enano <strong>mecánico</strong> puede fabricar engranajes de
                roca o bancos de tracción.
              </p>
              <p>Sus opciones son:</p>
              <ul>
                <li>
                  <code>t</code> Fabricar mecanismos de roca
                </li>
                <li>
                  <code>R</code> Fabricar banco de tracción
                </li>
              </ul>
              <p>
                Los engranajes de roca permiten unir palancas a distintos
                mecanismos como compuertas, puentes, etc.
              </p>
            </div>
          </details>

          <details id="talleres/basicos/tallerDeJabón" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + S</code> <strong>Taller de Jabón</strong>
            </summary>
            <div className="sangria line">
              <p>
                En el{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Soap_maker%27s_workshop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  taller de Jabón
                </a>{" "}
                un enano con profecion de <strong>jabonero</strong> puede
                producir{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Soap?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  jabón
                </a>{" "}
                usando legía y grasa.
              </p>
              <p>
                El jabón es importante para reducir la posibilidad de
                infecciones en el hospital.
              </p>
            </div>
          </details>

          <details id="talleres/basicos/prensa" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + p</code> <strong>Prensa</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
        </fieldset>

        <fieldset id="talleres/textil">
          <legend className="noTextSelection">Textil</legend>
          <details id="talleres/textil/tallerDeCuero" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + e</code> <strong>Taller de Cuero</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
          <details id="talleres/textil/tallerDeRopa" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + k</code> <strong>Taller de Ropa</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
          <details id="talleres/textil/tallerDeCurtidores" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + n</code> <strong>Taller de Curtidores</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
          <details id="talleres/textil/telar" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + o</code> <strong>Telar</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
          <details id="talleres/textil/tintorería" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + d</code>
              <strong> Tintorería</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
        </fieldset>

        <fieldset id="talleres/metalurgia">
          <legend className="noTextSelection">Metalurgia</legend>
          <details id="talleres/metalurgia/forja" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + f</code> <strong>Forja</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
          <details id="talleres/metalurgia/cenicero" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + y</code>
              <strong> Cenicero</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
        </fieldset>

        <fieldset id="talleres/militar">
          <legend className="noTextSelection">Militar</legend>
          <details id="talleres/militar/arquería" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + b</code>
              <strong> Arquería</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
          <details id="talleres/militar/tallerDeAsedio" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w + s</code> <strong>Taller de Asedio</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
        </fieldset>
      </div>
    </article>
  );
};

export default ArticleTalleres;
