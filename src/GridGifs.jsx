import { Gifs } from "./Gif"

export const GridGifs = ({gifs}) =>{
    return (
        <div className="grid-gifs">
            {
                gifs.map((gif, index)=>(
                    <Gifs 
                        key={gif.id}
                        gif = {gif}
                        index={index}
                    />
                ))
            }
        </div>
    )
}