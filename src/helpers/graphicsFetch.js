export const GraphicsFetch = async(token,idSeries) => {
  try {
    const URL = `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${idSeries}?token=${token}&mediaType=json`
    const data = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: token,
      }
    })
    const result = await data.json()
    return result
  } catch (error) {
    console.log(error);    
    return error
  }
}
