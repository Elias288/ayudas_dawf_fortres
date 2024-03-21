import ArticleComida from "./ArticleComida";
import ArticleConstrucciones from "./ArticleConstrucciones";
import ArticleDepositos from "./ArticleDepositos";
import ArticleMovimientoYMenu from "./ArticleMovimientoYMenu";
import ArticleOpcionesDelJuego from "./ArticleOpcionesDelJuego";
import ArticlePrimerasAcciones from "./ArticlePrimerasAcciones";
import ArticleServiciosBasicos from "./ArticleServiciosBasicos";
import ArticleTalleres from "./ArticleTalleres";
import ArticleUbicacionDelMapa from "./ArticleUbicacionDelMapa";
import ArticleZonas from "./ArticleZonas";

function Guias() {
  return (
    <>
      <ArticleOpcionesDelJuego />
      <ArticleUbicacionDelMapa />
      <ArticleMovimientoYMenu />
      <ArticlePrimerasAcciones />
      <ArticleServiciosBasicos />
      <ArticleComida />
      <ArticleDepositos />
      <ArticleTalleres />
      <ArticleConstrucciones />
      <ArticleZonas />
    </>
  );
}

export default Guias;
