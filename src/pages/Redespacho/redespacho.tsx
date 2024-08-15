import { useEffect, useState } from "react";
import logo from "../../img/logo.png"

type Repository = {
  id: number;
  Cidade: string;
  Agencia: string;
  Transportadora: string;
};

function Redespacho() {
  const [cidades, setCidades] = useState<Repository[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://sheet.best/api/sheets/17981fec-8395-4d90-b461-9e9ee0945868")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCidades(data);
      });
  }, []);

  const filterCidades = (searchTerm: string) => {
    return cidades.filter((cidade) =>
      cidade.Cidade.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const displayedCidades = filterCidades(searchTerm);

  return (
    <div className="container">
      <div className="logo">
          <img src={logo} alt="logosle"/>
      </div>
      <h1>Lista de Endereços</h1>
      <input
        type="text"
        id="searchBar"
        placeholder="Pesquisar endereços..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul id="addressList">
        {displayedCidades.length > 0 ? (
          displayedCidades.map((cidade, index) => (
            <li key={index}>
              <h2>{cidade.Cidade}</h2>
              <span style={{ marginRight: 10 }}>Agência: {cidade.Agencia}</span>
              <span>Transportadora: {cidade.Transportadora}</span>
            </li>
          ))
        ) : (
          <li className="no-results">Nenhuma cidade encontrado</li>
        )}
      </ul>
    </div>
    // <ul>
    //   {cidades.map((repo) => {
    //     return (
    //       <li key={repo.id}>
    //         <div className="card">
    //           <div>
    //             <h2>{repo.Cidade}</h2>
    //             <p>Agência: {repo.Agencia}</p>
    //             <p>Transportadora: {repo.Transportadora}</p>
    //           </div>
    //         </div>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
}

export default Redespacho;
