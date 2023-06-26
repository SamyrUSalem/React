import { useState } from 'react'

function App() {
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  //Esse estado será responsável de armazenar os comentários
  const [comment, setCommet] = useState([])

  const submit = (ev) => {
    ev.preventDefault()
    //Esse é um objeto q será responsável por armazenar os comentários, conforme as suas keys
    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      //O new Date é uma função do js para coletar a data/hora 
      date: new Date()
    }
    //Estou acrescentando no comment os comentários, o "...state" significa q os antigos estados também seráo mostrados
    setCommet((state) => [newComment, ...state])
    setAuthor("");
    setContent("");
  }

  return (
    <>
      <div id="app">
        <h2>Comentários</h2>
        <form onSubmit={submit}>
          <label htmlFor="email">Email: </label>
          <input value={author} onChange={(ev) => setAuthor(ev.target.value)} type="text" id='email' required />
          <label htmlFor="comment">Comentário: </label>
          <textarea value={content} onChange={(ev) => setContent(ev.target.value)} id="comment" cols="30" rows="5"></textarea>
          <button type='submit'>Enviar!</button>
        </form>
        <hr />
        <section id="allComents">
          {/*Isto é uma verificação, caso o comment.lenght seja menor ou igual a 0, quer dizer q n possui nenhum comentário então o "p" será ativado, mas caso seja maior quer dizer q possui, então o mesmo será inserido no página*/}
          {comment.length > 0 ? (
            comment.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                {/*O "toLocaleString" é para converter o date em uma string mas de acordo com a sua localdiade, se o computador estiver configurado para o Brasil, a data será mostrada conforme é utilizada nesse local, entre outros locais */}
                <span>{comment.date.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            ))
          ) : (
            <p>Comente algo!</p>
          )}
        </section>
      </div>
    </>
  )
}

export default App
