import { useEffect, useState } from "react"

type Repository = {
  id: number;
  Cidade: string;
  Agencia: string;
  Transportadora: string;
}

function Redespacho() {
  const [cidades, setCidades] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://sheet.best/api/sheets/17981fec-8395-4d90-b461-9e9ee0945868')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setCidades(data);
    })
  }, [])

  return (

          <ul>
            {cidades.map(repo => {
              return (
                <li key={repo.id}>
                  <div className="card">
                    <div>
                      <h2>{repo.Cidade}</h2>
                      <p>Agência: {repo.Agencia}</p>
                      <p>Transportadora: {repo.Transportadora}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
  )          
}

export default Redespacho
