import { Link } from "react-router-dom";

const ArticleDepositos = () => {
  return (
    <article id="depositos" className="text">
      <div className="articleContent">
        <h2>Depositos</h2>
        <p>
          En los{" "}
          <a
            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Menu?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp#Stockpiles_Menu"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Depositos
          </a>{" "}
          <code>p</code> los enanos irán dejando todos los objetos que esten
          especificados para cada depósito.
        </p>
        <p>
          Primero se selecciona que tipo de depósito se quiere hacer y despues
          se selecciona el área donde realizarlo. Una vez designado todos los
          enanos que tengan el trabajo de Acarreo empezarán a apilar los
          elementos que vayan en ese depósito.
        </p>

        <details className="opciones" open>
          <summary className="noTextSelection cursorPointer">
            <strong>Opciones de depósitos</strong>
          </summary>
          <div className="sangria line">
            <p>
              Para configurar un depósito ya creado, simplemente hay que
              posicionarse en el y pulsar
              <code>s</code>, lo que nos llevara a un menú donde seleccionar que
              tipo y que elementos colocar en él donde se listarán las{" "}
              <strong>categorias</strong>, los
              <strong>tipos</strong> y los{" "}
              <strong>elementos especificos</strong>. Para navegar entre ellas
              se utliza las <code>← →</code>.
            </p>
            <p>Las opciones son:</p>
            <ul>
              <li>
                <code>e</code> y <code>d</code> para habilitar y desabilitar la
                categoría.
              </li>
              <li>
                <code>a</code> y <code>b</code> para seleccionar y deseleccionar
                todos los tipos de la categoría.
              </li>
              <li>
                <code>p</code> y <code>f</code> para permitir o prohibir un
                elemento seleccionado del tipo.
              </li>
            </ul>
          </div>
        </details>
        <p>Las diferentes opciones de depositos son:</p>

        <details id="depositos/depositoDeAnimales" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + a</code> <strong>Depósito de Animales</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena animales en jaulas/trampas, jaulas/trampas vacías.</p>
          </div>
        </details>

        <details id="depositos/depositoDeAlimentos" open>
          <summary className="noTextSelection Depósito">
            <code>p + f</code> <strong>Depósito de Alimentos</strong>
          </summary>
          <div className="sangria line">
            <p>
              Almacena <Link to={"#comida"}>comida</Link> y subproductos
              alimentarios (Carne, Pescado, Plantas, Bebidas, Queso, Semillas,
              Hojas, Plantas molidas, Grasa, Sangre, Lejía, etc).
            </p>
          </div>
        </details>

        <details id="depositos/depositoDeMuebles" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + u</code> <strong>Depósito de Muebles</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena muebles y munición de asedio.</p>
          </div>
        </details>

        <details id="depositos/depositoDeCadaveres" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + y</code> <strong>Depósito de Cadáveres</strong>
          </summary>
          <div className="sangria line">
            <p>
              Almacena cadáveres de animales y enanos muertos si no hay un
              cementerio asignado.
            </p>
            <p>
              Se recomienda hacerlo al aire libre, ya que en un lugar cerrado
              genera miasma.
            </p>
          </div>
        </details>

        <details id="depositos/depositoDeBasura" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + r</code> <strong>Depósito de Basura</strong>
          </summary>
          <div className="sangria line">
            <p>
              Almacena basura y animales muertos si no hay un sementerio o si
              esta lleno.
            </p>
          </div>
        </details>

        <details id="depositos/depositoDePiedra" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + s</code> <strong>Depósito de Piedra</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena piedra/mineral.</p>
          </div>
        </details>

        <details id="depositos/depositoDeMadera" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + w</code> <strong>Depósito de Madera</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena madera</p>
          </div>
        </details>

        <details id="depositos/depositoDeGemas" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + e</code> <strong>Depósito de Gemas</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena Gemas</p>
          </div>
        </details>

        <details id="depositos/depositoDeBarras/Bloques" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + b</code> <strong>Depósito de Barras/Bloques</strong>
          </summary>
          <div className="sangria line">
            <p>
              Amacena barras (metal/carbón/potasa/ceniza/pearlash/jabón) y
              bloques (piedra/vidrio).
            </p>
          </div>
        </details>

        <details id="depositos/depositoDeTelas" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + h</code> <strong>Depósito de telas</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena telas</p>
          </div>
        </details>

        <details id="depositos/depositoDeCuero" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + l</code> <strong>Depósito de cuero</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena cuero</p>
          </div>
        </details>

        <details id="depositos/depositoDeMuniciones" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + z</code> <strong>Depósito de municiones</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena pernos, flechas y dardos.</p>
          </div>
        </details>

        <details id="depositos/depositoDeMonedas" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + n</code> <strong>Depósito de monedas</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena monedas</p>
          </div>
        </details>

        <details id="depositos/depositoDeProductosTerminados" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + g</code> <strong>Depósito de productos terminados</strong>
          </summary>
          <div className="sangria line">
            <p>
              Almacena productos terminados (cadenas/artesanías/ropa (no
              armaduras)/férulas/muletas/más).
            </p>
          </div>
        </details>

        <details id="depositos/depositoDeArmas" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + p</code> <strong>Depósito de armas</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena armas/componentes de trampas.</p>
          </div>
        </details>

        <details id="depositos/depositoDeArmaduras" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + p</code> <strong>Depósito de armaduras</strong>
          </summary>
          <div className="sangria line">
            <p>Almacena armaduras</p>
          </div>
        </details>

        <details id="depositos/depositoPersonalizado" open>
          <strong></strong>
          <summary className="noTextSelection cursorPointer">
            <strong>
              <code>p + c</code> Depósito personalizado
            </strong>{" "}
          </summary>
          <div className="sangria line">
            <p>Crear una reserva personalizada.</p>
          </div>
        </details>

        <details id="depositos/configuraciónDeAlmacenPersonalizada" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + t</code> <strong>Configuración</strong>de depósito
            personalizado
          </summary>
          <div className="sangria line">
            <p>Definir depósito personalizada.</p>
          </div>
        </details>

        <details id="depositos/EliminarAlmacen" open>
          <summary className="noTextSelection cursorPointer">
            <code>p + x</code> <strong>Eliminar depósito</strong>
          </summary>
          <div className="sangria line">
            <p>Elimina depósito seleccionado</p>
          </div>
        </details>
      </div>
    </article>
  );
};

export default ArticleDepositos;
