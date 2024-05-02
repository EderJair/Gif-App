import { useState } from 'react';


export const useSearchGifs = () => {
    const [valorInput, setValorInput] = useState('')
    const [gifs, setGifs] = useState([]);
    const [estaCargando, setestaCargando] = useState(false)
  
    const onChange = (evento) =>{
      const valor = evento.target.value;
      setValorInput(valor)
    }
  
    //funcion para llamar a la api
    const getGift = async (query) =>{
      //almacenas la url en una constante y le agregas el parametro query
      const url = `https://api.giphy.com/v1/gifs/search?api_key=9yKBb3kJBcwnhNo9MZ8B1Jc3ToPhpNSQ&q=${query}`
      setestaCargando(true)
      //alamcenas la respuesta, utilizas el metodo fetch
      const response = await fetch(url)
      //lo conviertes en tipo json
      const data = await response.json()
      setestaCargando(false)

      //retornas la data
      console.log(data)
      return data.data
    }
  
  
  
    const onSubmit = async (evento) => {
      //Evita la recargar de la pagina al momento de pulsar enter
      evento.preventDefault()
      //llama a la funcion getGift e igual la query a el valor del input
      const gifs = await getGift(valorInput)
      //actualiza el estado
      setGifs(gifs)
    }
  
  
    return {
        valorInput,
        onSubmit,
        onChange,
        gifs,
        estaCargando
    }
}
