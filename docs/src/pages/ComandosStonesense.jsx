import RenderArticleCommands from "../components/RenderArticleCommands";
import comandosArray from "../data/stonesense.json";

function ComandosStonsesense() {
  return (
    <>
      {comandosArray.map((comando, index) => (
        <RenderArticleCommands article={comando} key={index} />
      ))}
    </>
  );
}

export default ComandosStonsesense;
