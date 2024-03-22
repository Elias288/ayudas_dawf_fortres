import { useCustomContext } from "../../providers/ContextProvider";
import "./ShowPath.css";

/**
 * Muestra el path del comando
 * @returns {ReactNode}
 */
const ShowPath = () => {
  const { showPath } = useCustomContext();

  if (!showPath) return null;

  return (
    <div className="showPath" id="showPath">
      <span className="command">{showPath.command}</span>
      <span className="path">{showPath.path}</span>
    </div>
  );
};

export default ShowPath;
