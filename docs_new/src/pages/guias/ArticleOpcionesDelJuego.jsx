const ArticleOpcionesDelJuego = () => {
  return (
    <>
      <article id="opcionesDelJuego" className="text">
        <div className="articleContent">
          <h2>Opciones del juego</h2>
          <p>Usando Lazy Newb Pack las opciónes recomendadas:</p>
          <table>
            <thead>
              <tr>
                <th>Características</th>
                <th>Activado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acuiferos</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Intro</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Sonido</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Características</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cantidad de población</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Población estricta</td>
                <td>120</td>
              </tr>
              <tr>
                <td>Visitantes</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </>
  );
};

export default ArticleOpcionesDelJuego;
