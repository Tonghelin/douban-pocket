import fetchJsonp from 'fetch-jsonp'

export function getData (targetApi) {
  console.log(targetApi)
  return fetchJsonp(targetApi).then(
    (res) => {
      return res.json()
    }
  ).catch(
    (error) => {
      console.log('糟糕请求失败', error)
    }
  )
}
