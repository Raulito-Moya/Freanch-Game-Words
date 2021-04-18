 

 export const fetchTranslate = (url) => { //para traducir la palabra

    return fetch(url)
    
 }


 export const fetchTranslateCheck = async(word) => {  // para traducir la palabra en la comprobacion

     return fetch(`https://api.mymemory.translated.net/get?q=${ word }&langpair=es|fr`)

    const url = `https://api.mymemory.translated.net/get?q=${ word }&langpair=es|fr`
    const resp = await fetchTranslate(url)
    const body = await resp.json()
    const { translatedText } =  body.responseData
    console.log(translatedText);
     

 }