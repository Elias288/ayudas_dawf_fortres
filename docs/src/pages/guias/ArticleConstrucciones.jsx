import { Link } from "react-router-dom";

const ArticleConstrucciones = () => {
  return (
    <article id="construcciones" className="text">
      <div className="articleContent">
        <h2>Construcciones</h2>
        <div className="sangria">
          <p>
            Una acción importante en nuestra fortaleza es la construcción de
            diferentes elementos (edificios, muebles, muros, etc), esto lo
            podemos realizar desde el menú de{" "}
            <a
              href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Menu?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp#Building_Menu"
              target="_blank"
              rel="noopener noreferrer"
              className="external"
            >
              Construcción
            </a>{" "}
            <code>b</code>.
          </p>
          <p>
            En muchos casos es necesario fabricar el mueble/objeto antes de
            poder colocarlo y en algunos casos tambien es necesario que los
            enanos tengan el trabajo de transportar.
          </p>

          <details id="construcciones/soporteDeArmadura" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + a</code> <strong>Soporte de armadura</strong>
            </summary>
            <div className="sangria line">
              <p>
                Un{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Armor_stand?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Soporte de armadura
                </a>{" "}
                es un tipo de mueble que valoriza una habitación. Puede ser
                usado para definir un cuartel.
              </p>
            </div>
          </details>

          <details id="construcciones/cama" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + b</code> <strong>Cama</strong>
            </summary>
            <div className="sangria line">
              <p>
                La{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Bed?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Cama
                </a>{" "}
                es un mueble fabricado en la{" "}
                <Link to={"#talleres/basicos/tallerDeCarpinteria"}>
                  Taller de carpinería
                </Link>{" "}
                que puede ser usada para definir dormitorios o cuartel donde los
                enanos puedan dormir.
              </p>
            </div>
          </details>

          <details id="construcciones/asiento" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + c</code> <strong>Asiento</strong>
            </summary>
            <div className="sangria line">
              <p>
                Un{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Throne?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Asiento de madera o trono de piedra
                </a>{" "}
                es un mueble que los enanos pueden usar para sus rutinas
                diarias. Al igual que las mesas son una parte de los comedores.
              </p>
            </div>
          </details>

          <details id="construcciones/ataud" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + n</code> <strong>Ataúd</strong>
            </summary>
            <div className="sangria line">
              <p>
                Un{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Coffin?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Ataúd
                </a>{" "}
                es un contenedor para los cuerpos de enanos fallecidos y sus
                mascotas.
              </p>
              <p>
                Una vez construido, debe ser asignado como tumba con la{" "}
                <code>b</code> donde se podrán ver las siguientes opciones:
              </p>
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

          <details id="construcciones/puerta" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + d</code> <strong>Puerta</strong>
            </summary>
            <div className="sangria line">
              <p>
                Una{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Door?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Puerta
                </a>{" "}
                es un mueble utilzado para controlar el movimiento de enanos,
                mascotas, liquidos y delimitar habitaciones.
              </p>
              <p>
                Debe construirse junto a una pared u otra forma de soporte.
                Puede ser construida de diferentes materiales:
              </p>
              <ul>
                <li>Piedra</li>
                <li>Metal (x3)</li>
                <li>Vidrio</li>
                <li>Madera</li>
                <li>Gemas</li>
                <li>Huesos</li>
                <li>Cristal (llamada portal)</li>
              </ul>
              <p>Una puerta tiene las siguientes opciones:</p>
              <ul>
                <li>
                  <code>l</code> <strong>Permitir paso/Prohibir paso</strong>
                </li>
                <li>
                  <code>o</code>{" "}
                  <strong>
                    Mantener cerrada/Permitir que mascotas transiten
                  </strong>
                </li>
                <li>
                  <code>s</code>{" "}
                  <strong>
                    Establecer como interna/Establecer como externa
                  </strong>
                  (una puerta interna no limita una habitación)
                </li>
              </ul>
            </div>
          </details>

          <details id="construcciones/compuerta" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + x</code> <strong>Compuerta</strong>
            </summary>
            <div className="sangria line">
              <p>
                Una{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Floodgate?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Compuerta
                </a>{" "}
                es un tipo de puerta que permite controlar el flujo de liquidos
                (agua, magma), que debe ser accionada mediante mecanismos por
                una palanca o placa de presión que las abren o cierran.
              </p>
              <p>
                Cuando se cierran aparecen en el mundo, cuando están abiertas
                son invisibles.
              </p>
              <p>
                Cuando están cerradas bloquean flujo de liquidos tanto en los
                ejes X e Y como en Z ya que son consideradas como muros también.
              </p>

              <p>
                Una vez colocada y colocada una{" "}
                <Link to={"#construcciones/trampasPalancas/palanca"}>
                  palanca
                </Link>{" "}
                un enano
                <strong>mecánico</strong> debe conectarlas usando 2 engranajes
                de piedra. Una vez conectados se puede ordenar a la palanca
                activarse con <code>P</code>
              </p>
            </div>
          </details>

          <details id="construcciones/compuertaDeSuelo" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + H</code> <strong>Compuerta del suelo</strong>
            </summary>
            <div className="sangrialine">
              <p>
                Una{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Hatch_cover?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp&amp;_x_tr_hist=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Tapa de escotilla
                </a>{" "}
                es un tipo de puerta que permite controlar el paso entre niveles
                Z, que puede ser colocado en escaleras o rampas.
              </p>
              <p>
                Al igual que las compuertas no es visible cuando está abierta y
                pueden ser construidas de diferentes materiales
              </p>
              <ul>
                <li>Piedra</li>
                <li>Metal</li>
                <li>Madera</li>
                <li>Vidrio</li>
              </ul>
            </div>
          </details>

          <details id="construcciones/regillaDePared" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + W</code> <strong>Regilla de pared</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/regillaDeSuelo" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + G</code> <strong>Regilla del suelo</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/barrasVerticales" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + B</code> <strong>Barras verticales</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/barrasDeSuelo" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + Alt + b</code> <strong>Barras de suelo</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/armario" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + f</code> <strong>Armario</strong>
            </summary>
            <div className="sangria line">
              <p>
                Un{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Cabinet?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Armario
                </a>{" "}
                es un tipo de mueble que utilizan los enanos para guardar su
                ropa. Son un requisito para las habitaciones de los nobles ya
                que aumentan el valor de una.
              </p>
              <p>
                Si un enano no tiene uno en su habitación dejará la ropa en el
                suelo.
              </p>
              <p>Pueden ser construido de diferentes materiales</p>
              <ul>
                <li>Madera</li>
                <li>Piedra</li>
                <li>Vidrio</li>
                <li>Metal (excepto arrabio y bismuto)</li>
              </ul>
            </div>
          </details>

          <details id="construcciones/" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + h</code>
              <strong>Contenedor</strong>
            </summary>
            <div className="sangria line">
              <p>
                Un{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Container?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Contenedor
                </a>{" "}
                es un termino general para varios tipos de artículos similares
                utilizados para el almacenamiento y tienen un comportamiento
                similar.
              </p>
              <p>Tienen un nombre diferente dependiendo del material</p>
              <ul>
                <li>
                  Vidrio: <strong>Caja</strong> (Box)
                </li>
                <li>
                  Piedra: <strong>Cofre</strong> (Coffer)
                </li>
                <li>
                  Madera/Metal: <strong>Baúl</strong> (Chest)
                </li>
                <li>
                  Tela/Cuero: <strong>Bolsa</strong> (Bag)
                </li>
              </ul>
            </div>
          </details>

          <details id="construcciones/perreras" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + k</code> <strong>Perreras</strong>
            </summary>
            <div className="sangria line">
              <p>
                (requiere entrenamiento de animales , disección de animales
                pequeños y/o trabajo de captura)
              </p>
            </div>
          </details>

          <details id="construcciones/granja" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + p</code> <strong>Granja</strong>
            </summary>
            <div className="sangria line">
              <p>
                Las{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Farming?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Granjas
                </a>{" "}
                son parcelas donde realizar la agricultura de todos los
                cultivos.
              </p>

              <p>
                Las granjas pueden ser construidas en suelos o piedra con barro
                (para lo que es necesario irrigar) y pueden tener una
                caracteristica de cada categoría:
              </p>
              <ul>
                <li>
                  <strong>Lugar</strong>
                </li>
                <ul>
                  <li>Interiores</li>
                  <li>Exteriores</li>
                </ul>
                <li>
                  <strong>Altura</strong>
                </li>
                <ul>
                  <li>Sobre el nivel del suelo</li>
                  <li>Subterraneos</li>
                </ul>
              </ul>

              <p>
                Con las teclas <code>u m</code> agrandaremos nuestra zona de
                cultivo en el eje X y con las teclas <code>h k</code>{" "}
                agrandaremos en el eje Y. Solo pueden ser colocadas sobre{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Soil?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  suelo
                </a>{" "}
                lo que podria implicar la necesidad de irrigar en caso de no
                encontrar en el subsuelo.
              </p>
              <p>
                Para está designación es necesario un enano con profeción de
                <strong>Granjero</strong>.
              </p>
              <p>
                Una vez construida la granja podremos elegir que tipo de planta
                podremos plantar en ella. Existen una gran variedad de plantas
                tanto para el exterior como para el interior. Dependiendo de la
                planta, puede ser plantada en una o barias estaciónes.
              </p>
              <p>
                Dentro de las granjas podemos ver que plantas pueden ser
                plantadas en cada estación, donde cada una tiene asignada una
                letra:
              </p>
              <ul>
                <li>
                  <code>a</code> Primavera
                </li>
                <li>
                  <code>b</code> Verano
                </li>
                <li>
                  <code>c</code> Otoño
                </li>
                <li>
                  <code>d</code> Invierno
                </li>
              </ul>
              <p>
                Con la tecla <code>Enter</code> asignamos una planta para esa
                estación en esa granja. Con
                <code>Shift + Enter</code> podemos asignar esa plantación para
                todas las estaciónes disponibles para esa planta.
              </p>
              <p>
                La recomendación es empezar a plantar los{" "}
                <code>Plump helmet</code> ya que pueden ser usadas tanto para
                comida como para bebidas y pueden ser plantadas en todas las
                estaciones. Además debemos quitarlos de la cocina para usarlo
                solo en la generación de bebida ya que si la cocinamos se
                perderán las semillas. Entrando al menú
                <code>z</code>, llendo a la pestaña cocina pulsaremos{" "}
                <code>c</code> en la planta en cuestión.
              </p>
            </div>
          </details>

          <details id="construcciones/estanteDeArmas" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + r</code> <strong>Estante de armas</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/estatua" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + s</code> <strong>Estatua</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/losa" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + Alt + s</code>
              <strong>Losa</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/mesa" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + t</code> <strong>Mesa</strong>
            </summary>
            <div className="sangria line">
              <p>
                Una{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Table?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Mesa
                </a>{" "}
                es un mueble necesario para que los enanos puedan comer
                comodamente asi como también para definir una habitación como
                comedor y como mesa de operación en un hospital.
              </p>
              <p>Pueden ser fabricadas de diferentes materiales:</p>
              <ul>
                <li>Madera</li>
                <li>Piedra</li>
                <li>Metal</li>
                <li>Vidrio</li>
              </ul>
            </div>
          </details>

          <details id="construcciones/caminoPavimentado" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + o</code> <strong>Camino pavimentado</strong>
            </summary>
            <div className="sangria line">
              <p>(requiere arquitectura)</p>
            </div>
          </details>

          <details id="construcciones/caminoDeTierra" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + O</code> <strong>Camino de tierra</strong>
            </summary>
            <div className="sangria line">
              <p>(requiere arquitectura)</p>
            </div>
          </details>

          <details id="construcciones/puente" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + g</code> <strong>Puente</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/pozo" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + l</code> <strong>Pozo </strong>
            </summary>
            <div className="sangria line">
              <p>(requiere arquitectura)</p>
            </div>
          </details>

          <details id="construcciones/maquinasDeAsedio" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + i</code> <strong>Máquinas de asedio</strong>
            </summary>
            <div className="sangria line">
              <ul>
                <li>
                  <code>b + i + b</code> Balista
                </li>
                <li>
                  <code>b + i + c</code> Catapulta
                </li>
              </ul>
              <p></p>
            </div>
          </details>

          <details id="construcciones/talleres" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + w</code> <strong>Talleres</strong>
            </summary>
            <div className="sangria line">
              <p>
                Los <Link to={"#talleres"}>Talleres</Link> son edificios donde
                los enanos pueden procesar materiales para convertirlos en
                artículos de valor o útiles.
              </p>
              <p>
                Cuando un taller solicita la fabricación de un artículo el
                taller genera un trabajo hasta que un enano con el trabajo
                adecuado llegue a realizarlo.
              </p>
            </div>
          </details>

          <details id="construcciones/hornos" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + e</code> <strong>Hornos</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/ventanaDeVidrio" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + y</code> <strong>Ventana de vidrio</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/ventanaDeGemas" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + Y</code> <strong>Ventana de gemas</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/paredSueloEscaleraVia" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + C</code> <strong>Pared/Suelo/Escalera/Via</strong>
            </summary>
            <div className="sangria line">
              <ul>
                <li>
                  <code>w</code> <strong>Muro</strong> - (requiere
                  albañilería/carpintero)
                </li>
                <li>
                  <code>f</code> <strong>Piso</strong> - (requiere
                  albañilería/carpintero)
                </li>
                <li>
                  <code>r</code> <strong>Rampa</strong> - (requiere
                  albañilería/carpintero)
                </li>
                <li>
                  <code>u</code> <strong>Escalera arriba</strong> - (requiere
                  albañilería/carpintero)
                </li>
                <li>
                  <code>d</code> <strong>Escalera abajo</strong> - (requiere
                  albañilería/carpintero)
                </li>
                <li>
                  <code>i</code> <strong>Escalera arriba/abajo</strong> -
                  (requiere albañilería/carpintero)
                </li>
                <li>
                  <code>F</code> <strong>Fortificación</strong> - (requiere
                  albañilería/carpintero)
                </li>
              </ul>
              <p></p>
            </div>
          </details>

          <details id="construcciones/almacenComercial" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + D</code> <strong>Almacén Comercial</strong>
            </summary>
            <div className="sangria line">
              <p>
                El{" "}
                <a
                  href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Trade_depot?_x_tr_sl=en&amp;_x_tr_tl=es&amp;_x_tr_hl=es&amp;_x_tr_pto=wapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  Almacén comercial
                </a>{" "}
                es el edificio que permite comerciar con las caravanas que
                lleguen a la fortaleza.
              </p>
              <p>
                Para este edificio es necesario desingar a un enano como{" "}
                <strong>noble comerciante</strong> que para poder negociar debe
                ser llamado al almacén
                <code>r</code> una vez llegue la caravana.
              </p>
              <p>
                Los productos que vayan a ser comercializados con las caravanas
                deben primero ser llevados desde los depósitos <code>g</code> y
                una vez finalizado pueden ser devueltos a los depósitos.
              </p>
            </div>
          </details>

          <details id="construcciones/trampasPalanca" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + T</code>
              <strong>Trampas/palanca</strong>
            </summary>
            <div className="sangria line">
              <ul>
                <details id="construcciones/trampasPalancas/">
                  <summary className="noTextSelection cursorPointer">
                    <code>s</code> Caida trampa (requiere mecánica)
                  </summary>
                  <div className="sangria">
                    <p></p>
                  </div>
                </details>
                <details id="construcciones/trampasPalancas/">
                  <summary className="noTextSelection cursorPointer">
                    <code>w</code> Armas trampa (requiere mecánica)
                  </summary>
                  <div className="sangria">
                    <p></p>
                  </div>
                </details>
                <details id="construcciones/trampasPalancas/palanca">
                  <summary className="noTextSelection cursorPointer">
                    <code>l</code> Palanca (requiere mecánica)
                  </summary>
                  <div className="sangria">
                    <p></p>
                  </div>
                </details>
                <details id="construcciones/trampasPalancas/">
                  <summary className="noTextSelection cursorPointer">
                    <code>p</code> Placa de presión (requiere mecánica)
                  </summary>
                  <div className="sangria">
                    <p></p>
                  </div>
                </details>
                <details id="construcciones/trampasPalancas/">
                  <summary className="noTextSelection cursorPointer">
                    <code>c</code> Jaula (requiere mecánica)
                  </summary>
                  <div className="sangria">
                    <p></p>
                  </div>
                </details>
                <details id="construcciones/trampasPalancas/">
                  <summary className="noTextSelection cursorPointer">
                    <code>S</code> Lanza/púa vertical (requiere mecánica)
                  </summary>
                  <div className="sangria">
                    <p></p>
                  </div>
                </details>
              </ul>
              <p></p>
            </div>
          </details>

          <details id="construcciones/componentesMecanicos" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + M</code> <strong>Componentes mecánicos</strong>
            </summary>
            <div className="sangria line">
              <ul>
                <li>
                  <code>s</code> Bomba de tornillo (requiere mano de obra
                  mecánica)
                </li>
                <li>
                  <code>w</code> Ruede hidráulica (requiere mano de obra
                  mecánica)
                </li>
                <li>
                  <code>m</code> Molino de viento (requiere mano de obra
                  mecánica)
                </li>
                <li>
                  <code>g</code> Conjunto de engranajes (requiere mano de obra
                  mecánica)
                </li>
                <li>
                  <code>h</code> Eje horizontal (requiere mano de obra mecánica)
                </li>
                <li>
                  <code>v</code> Eje vertical (requiere mano de obra mecánica)
                </li>
              </ul>
              <p></p>
            </div>
          </details>

          <details id="construcciones/instrumentos" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + I</code>
              <strong>Instrumentos</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/soporte" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + S</code> <strong>Soporte</strong>
            </summary>
            <div className="sangria line">
              <p>(requiere arquitectura)</p>
            </div>
          </details>

          <details id="construcciones/trampaParaAnimales" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + m</code> <strong>Trampa para animales</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/atadura" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + v</code> <strong>Atadura</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/jaula" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + j</code> <strong>Jaula</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/dianaDeArqueria" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + A</code> <strong>Diana de arqueria</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/bancoDeTraccion" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + R</code> <strong>Banco de tarcción</strong>
            </summary>
            <div className="sangria line">
              <p>(requiere arquitectura)</p>
            </div>
          </details>

          <details id="construcciones/nidoDeCaja" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + N</code> <strong>Nido en caja</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/Colmena" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + Alt + h</code>
              <strong>Colmena</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/altarDeOfrenda" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + Alt + a</code> <strong>Altar de ofrenda</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/Estanteria" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + Alt + c</code>
              <strong>Estanteria</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>

          <details id="construcciones/mueblesDeExposición" open>
            <summary className="noTextSelection cursorPointer">
              <code>b + F</code> <strong>Muebles de exposición</strong>
            </summary>
            <div className="sangria line">
              <p></p>
            </div>
          </details>
        </div>
      </div>
    </article>
  );
};

export default ArticleConstrucciones;
