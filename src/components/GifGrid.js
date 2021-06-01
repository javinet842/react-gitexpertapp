import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifts';
import GifGridItem from './GifGridItem';
    
    const GifGrid = ({category}) => {

        const {data: images, loading} = useFetchGifs(category);

        return (
            <>
                <h3 className="animate__animated animate__bounce">{category}</h3>
                {
                    loading && <p className="animate__animated animate__flash">Loading</p>
                }
                <div className="card-grid animate__animated animate__bounce">
                    
                    {
                        images.map(img=>(
                            <GifGridItem
                                key={img.id} 
                                {...img}
                            />
                        ))
                    }                
                </div>
            </>
        )
    }
    
    export default GifGrid
    