import { Link } from "react-router-dom";
import { normalizeText, toCamelCase } from "../functions.js";

/**
 * Command object
 * @typedef {Object} Comando
 * @property {string} command
 * @property {string} key
 * @property {string} path
 * @property {string} type
 */

/**
 * Article object
 * @typedef {Object} Article
 * @property {string} name
 * @property {string} key
 * @property {Array<Comando>} data
 */

/**
 *
 * @param {Object} props
 * @param {Article} props.article
 * @returns {ReactNode}
 */
const RenderArticleCommands = ({ article }) => {
  const { key, name, data } = article;
  const camelId = toCamelCase(normalizeText(article.name));

  return (
    <article id={camelId}>
      <div className="articleContent">
        <h2>
          {key && <code>{key}</code>}
          <span>{name}</span>
        </h2>

        <div id="menu">
          <div className="listHeader">
            <span className="comando">Acción</span>
            <span>Comando</span>
          </div>

          {data.map((comando, key) => (
            <RenderCommand comando={comando} key={key} />
          ))}
        </div>
      </div>
    </article>
  );
};

/**
 *
 * @param {Object} props
 * @param {Comando} props.comando
 * @returns {ReactNode}
 */
const RenderCommand = ({ comando }) => {
  const cammelCommand = toCamelCase(normalizeText(comando.command));

  return (
    <div>
      <input type="radio" name="radio" id={"radio_" + cammelCommand} />

      <div className="row">
        <label htmlFor={"radio_" + cammelCommand}>
          {comando.type === "link" ? (
            <Link to={"#" + cammelCommand} className="comando">
              {comando.command}
            </Link>
          ) : (
            <span className="comando">{comando.command}</span>
          )}

          <code>{comando.key}</code>

          <input type="hidden" value={comando.path} />
        </label>
      </div>
    </div>
  );
};

export default RenderArticleCommands;
