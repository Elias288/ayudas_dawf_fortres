const ArticleUbicacionDelMapa = () => {
  return (
    <article id="ubicacionDelMapa" className="text">
      <div className="articleContent">
        <h2>Ubicación del mapa</h2>

        <details id="ubicaciónDelMapa/movimiento" open>
          <summary className="noTextSelection">Movimiento</summary>
          <div className="sangria line">
            <p>
              Para moverse en el mundo y la región se utilizan las flechas{" "}
              <code>← → ↑ ↓</code>, para mover la ubicación local{" "}
              <code>h k u m</code> y para aumentar el tamaño del área local se
              utiliza <code>H K U M</code>. Con <code>F1</code>, <code>F2</code>{" "}
              y <code>F3</code>
              se puede intercambiar entre los distintos viomas que se encuentren
              dentro del área local.
            </p>
          </div>
        </details>

        <details id="ubicaciónDelMapa/busqueda" open>
          <summary className="noTextSelection">Búsqueda</summary>
          <div className="sangria line">
            <p>
              Con la letra <code>f</code> se abrirá un menú de busqueda con la
              cual podremos seleccionar entre diferentes opciones.
            </p>
            <ul>
              <li>Dimención X</li>
              <li>Dimención Y</li>
              <li>Salvajismo</li>
              <li>Criaturas malvadas</li>
              <li>Elevación</li>
              <li>Temperatura</li>
              <li>Lluvia</li>
              <li>Drenaje</li>
              <li>Piedra Fundente</li>
              <li>Acuifero</li>
              <li>Río</li>
              <li>Metal poco profundo</li>
              <li>Metal profundo</li>
              <li>Suelo</li>
              <li>Arcilla</li>
            </ul>
          </div>
        </details>

        <details id="ubicaciónDelMapa/visualizacionDeInformacion" open>
          <summary className="noTextSelection">
            Visualización de información
          </summary>
          <div className="sangria line">
            <p>
              Con el <code>tab</code> se navega entre las distintas
              informaciónes del área seleccionada:
            </p>
            <ul>
              <li>
                Caracteristicas principales: el primer menú sirve para ver los
                componentes del terreno, la temperatura y la precencia de
                arboles.
              </li>
              <li>Las civilizaciones vecina.</li>
              <li>Las civilizaciones a las que puedes pertenecer.</li>
              <li>Mapa de elevación.</li>
              <li>Mapa de elevación númerica.</li>
            </ul>
          </div>
        </details>

        <details id="ubicaciónDelMapa/desembarque" open>
          <summary className="noTextSelection">Desembarque</summary>
          <div className="sangria line">
            <p>
              Una vez elegida la zona donde queremos desembarcar pulsaremos{" "}
              <code>e</code> para comenzar, en el siguiente menú podremos elegir
              a nuestros enanos o comenzar con unos ya predefinidos.
            </p>
          </div>
        </details>
      </div>
    </article>
  );
};

export default ArticleUbicacionDelMapa;
