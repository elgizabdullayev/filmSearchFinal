export const searchResult = (data) => ({
    type: 'searchResult',
    payload: data
})


export const search = (searchText) =>{
    return async dispatch => {
        try {
            const response = await fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
            const data = await response.json()
            dispatch(searchResult(data))
            console.log({ data })
          } catch (e){
           console.log("Error")
      
          }
    }
}