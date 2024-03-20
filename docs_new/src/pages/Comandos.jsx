import RenderArticleCommands from "../components/RenderArticleCommands.jsx";
import comandosArray from "../data/comandos.json";

function Comandos() {
  return (
    <>
      {comandosArray.map((comando, index) => (
        <RenderArticleCommands article={comando} key={index} />
      ))}
    </>
  );
}

export default Comandos;
