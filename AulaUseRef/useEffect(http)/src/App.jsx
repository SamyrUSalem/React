import { useEffect } from "react"
import { useState } from "react"

async function fetchPokemon() {
  //Essa varialves esta armazenando uma lista com vários pokemons
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
  //Essa variavel esta convertendo para js
  const data = await response.json()
  //O results é um array q ja vem da Api
  return data.results
}
export default function App() {
  //Esse state esta sendo usado para poder controlar os valores da variaves e poder fazer as atualizações aparecerem na tela após o carregamento do componente
  const [pokemon, setPokemon] = useState([])
  //Vai ser usado para mostrar os detalhes do pokemon
  const [pokeShow, SetPokeShow] = useState(null)

  //Na maneira q esta o código seria executado em loop, pq sempre q a função setPokemon fosse ativada, o componentente seria remontado e a requisição seria feita de novo
  // fetchPokemon().then(results => {
  //   console.log("requisição concluída")
  //   console.log(results)
  //   setPokemon(results)
  // })

  //Usando o useEffect, a requisição será feita apenas uma vez pq o segundo parâmetro dele esta vazio, então ele n possui nenhuma razão para ser executado de novo, ele irá ser ativado somente na primeira vez q o componente for montado
  useEffect(() => {
    fetchPokemon().then(results => {
      console.log("requisição concluída")
      console.log(results)
      setPokemon(results)
    })
  }, [])



  const showDetails = async (url) => {
    //Com a url fornecida pelo evento, será chamada a API e será convertida para JS
    const data = await fetch(url).then(res => res.json())
    console.log(data)
    SetPokeShow(data)
  }

  return (
    <div className="app">
      <div>
        <h2>Pokemon</h2>
        <ul className="pokemon">
          {pokemon.map(mon => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button onClick={() => showDetails(mon.url)}>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/*Se o pokeShow n for null, os códigos abaixo será exibido conforme a ativação do event */}
      {pokeShow && (
        <div>
          <h2>{pokeShow.name}</h2>
          <img
            src={pokeShow.sprites.front_default}
            alt=""
          />
          <div className="stat">
            <b>Tipo: </b>
            {pokeShow.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>{pokeShow.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>{pokeShow.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {pokeShow.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {pokeShow.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}