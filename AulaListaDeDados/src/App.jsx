const games = [
  {
    "id": 1,
    "coverImage": "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
    "title": "Super Mario Bros",
    "releaseYear": 1985,
    "description": "A classic platformer game."
  },
  {
    "id": 2,
    "coverImage": "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
    "title": "The Legend of Zelda",
    "releaseYear": 1986,
    "description": "A top-down adventure game."
  },
  {
    "id": 3,
    "coverImage": "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
    "title": "Final Fantasy",
    "releaseYear": 1987,
    "description": "A classic role-playing game."
  },
  {
    "id": 4,
    "coverImage": "https://gamefaqs.gamespot.com/a/box/0/3/4/3034_front.jpg",
    "title": "Doom",
    "releaseYear": 1993,
    "description": "A first-person shooter game."
  },
  {
    "id": 5,
    "coverImage": "https://cdn.mobygames.com/covers/4056006-warcraft-orcs-humans-dos-front-cover.jpg",
    "title": "Warcraft",
    "releaseYear": 1994,
    "description": "A real-time strategy game."
  },
  {
    "id": 6,
    "coverImage": "https://cdn.mobygames.com/covers/5346152-starcraft-windows-front-cover.jpg",
    "title": "Starcraft",
    "releaseYear": 1998,
    "description": "A military science fiction game."
  },
  {
    "id": 7,
    "coverImage": "https://i.pinimg.com/originals/a0/d0/9c/a0d09c9cd3eb770f8f83e23744da72fc.jpg",
    "title": "Half-Life",
    "releaseYear": 1998,
    "description": "A first-person shooter game."
  },

  {
    "id": 9,
    "coverImage": "https://cdn.mobygames.com/covers/3966925-halo-combat-evolved-xbox-front-cover.jpg",
    "title": "Halo",
    "releaseYear": 2001,
    "description": "A military science fiction shooter game."
  }
]

let gameList = []

//O react n consegue converter na tela objetos, então transformei eles em um componente do react abaixo
games.forEach(games => {
  gameList.push(<h2>{games.title}</ h2>)
})

function App() {
  return (
    <>
      <div style={{ padding: "0 4rem 4rem" }} className="App">
        <h1>Jogos</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}>
          {/*O map é forma mais utilizada para redenrizar as listas, pois ele cria uma cópia do array q ´re referenciado, no caso é o games, e com isso podemoa convertes todos os objetos para uma lista de componentes como o ex abaixo, devido a isso poderá ser mostrado na tela */}
          {games.map((games) =>
          (
            //O atributo key é para o react conseguir identificar cada elemento do array, para poder por exemplo: trocar as ordens dos elementos, retirar algum, modifcar, etc...
            <div key={games.id}>
              <div >
                <h2>{games.title}</h2>
                <img src={games.coverImage} style={{ height: "30rem", width: "20rem", objectFit: "cover" }} />
                <p>{games.description}</p>
              </div>
            </div>

          )
          )}
        </div>

      </div>
    </>
  )
}

export default App
