import { Link } from "react-router-dom";

const ArticleComida = () => {
  return (
    <article id="comida" className="text">
      <div className="articleContent">
        <h2>Comida</h2>
        <p>
          La industria de la comida nos permitirá mantener a nuestros enanos
          bien alimentados. Hay varias formas que tienen para obtenerla.
        </p>

        <details id="comida/granjas" open>
          <summary className="bold noTextSelection cursorPointer">
            Granjas
          </summary>
          <div className="sangria line">
            <p>
              Las <Link to={"#construcciones/granja"}>Granjas</Link>{" "}
              <code>b + p</code> nos permitirán cultivar diferentes plantas que
              pueden ser utilizadas tanto para la comida y bebida como para la
              industra textil.
            </p>
            <p>
              Para procesar las plantas en otros productos se necesita el taller
              de{" "}
              <Link to={"#talleres/comida/tallerDeAgricultura"}>
                Agricultura
              </Link>{" "}
              para producir hilo, jarabe o unguentos y la{" "}
              <Link to={"#talleres/comida/destileria"}>Destilería</Link> para
              producir cerveza, vino o extractos.
            </p>
          </div>
        </details>

        <details id="comida/destileríaDeAlcohol" open>
          <summary className="bold noTextSelection cursorPointer">
            Destilería de alcohol
          </summary>
          <div className="sangria line">
            <p>
              La{" "}
              <Link to={"#talleres/comida/destileria"}>
                Destilería de alcohol
              </Link>{" "}
              <code>b + w + l</code> es un taller básico para una fortaleza
              enana, que sirve para la fabricación de distintas bebidas
              alcoholicas.
            </p>
            <p>
              Una vez se tengan plantas para producir alcohol, debemos dar la
              orden de fabricarlo con la <code>a</code> y elegimos elaborar
              bebida a partir de plantas <code>b</code> con las plantas
              disponibles.
            </p>
          </div>
        </details>

        <details id="comida/animales" open>
          <summary className="bold noTextSelection cursorPointer">
            Animales
          </summary>
          <div className="sangria line">
            <p>
              Los animales pueden ser confinados en una zona de pastoreo que
              puede ser externo para los animales que necesitan pasto para comer
              como las bacas y los caballos; o tinerno para los animales más
              pequeños como los patos o gallinas que no lo necesitan.
            </p>
            <p>
              Para crear esa zona se debe pulzar la <code>i</code>, seleccionar
              la zona y con la
              <code>n</code> la designamos como zona de corral/pastoreo.
            </p>
            <p>
              Todos los animales que se tengan pueden ser sacrificados en una{" "}
              <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Butcher%27s_shop?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                Carnicería
              </a>{" "}
              <code>b + w + u</code> tanto para obtener carne como cuero y
              huesos.
            </p>
            <p>
              Cuando se quiera sacrificar un animal lo podremos hacer desde el
              menú <code>z</code>, ir a la pestaña de animales y marcar como
              "listo para el sacrificio" usando la
              <code>b</code>. Será necesario por lo menos un enano con la
              profeción de carnicero.
            </p>
          </div>
        </details>

        <details id="comida/pesca" open>
          <summary className="bold noTextSelection cursorPointer">
            Pesca
          </summary>
          <div className="sangria line">
            <p>
              Los enanos designados como <strong>pescadores</strong> buscarán
              donde pescar automáticamente pero se puede crear una zona de pesca
              manualmente con la <code>i</code>, que permitirá seleccionar una
              zona y con la <code>f</code> asignarla como zona de pesca.
            </p>
            <p>
              Para limpiar los peces que se obtengan es necesario la{" "}
              <Link to={"#talleres/comida/pescaderia"}>Pescaderia</Link>{" "}
              <code>b + w + h</code>
              donde será necesario un enano con profeción de{" "}
              <strong>limpiador de peces</strong>.
            </p>
          </div>
        </details>

        <details id="comida/cocina" open>
          <summary className="bold noTextSelection cursorPointer">
            Cocina
          </summary>
          <div className="sangria line">
            <p>
              La <Link to={"#talleres/comida/cocina"}>Cocina</Link>{" "}
              <code>b + w + z</code>
              permitirá cocinar la carne para que sacie más que cruda.
            </p>
          </div>
        </details>
      </div>
    </article>
  );
};

export default ArticleComida;
