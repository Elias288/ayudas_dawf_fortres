import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <article className="text">
        <div className="articleContent">
          <h2>HomePage</h2>

          <p>
            Esta herramienta tiene como objetivo facilitar el conocer los{" "}
            <Link to={"commands"}>Comandos</Link> de acceso rapido y{" "}
            <Link to={"guides"}>Guías básicas</Link> de como jugar Dwarf
            Fortress.
          </p>
          <small>EBianchi</small>
        </div>
      </article>
    </>
  );
}

export default HomePage;
