

export const getGifs = async ( category ) => {
    //hacemos una peticion http en javascript actual (lo que sustituye a una llamada ajax) 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=UKGt1n2PXD3ff2UYj0hN25czZ0pd1m9K`;
    const response = await fetch (url);
    const {data} = await response.json(); 

    const gifs = data.map( img => {
         return {
              id: img.id,
              title: img.title,
              url: img.images?.downsized_medium.url //ponemos la interrogación (condición) para preguntar que si vienen las imagenes entonces la utilice
         }
    });

    //console.log(data);  
    // console.log(gifs);
    // setImages(gifs);
    return gifs;

 }
