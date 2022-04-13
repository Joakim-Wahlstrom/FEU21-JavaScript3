import { useEffect, useState, useRef } from "react"

export const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // const _config = useRef(config)
  useEffect(() => {

    const controller = new AbortController()

    const fetchData = async () => {
      setLoading(true)
      try {

        const res = await fetch(url, { signal: controller.signal })


        console.log(res)
        if(!res.ok)
          throw new Error(res.status, res.statusText)

        const _data = await res.json()
        setLoading(false)
        setData(_data)
        setError(null)
      } 
      catch (err) {
        if(err.name === 'AbortError') {
          console.log('Fetch aborted')
        } 
        else {
          setError('can\'t fetch the data')
          console.log(err.message)
          setLoading(false)
        }
      }

    }
    fetchData()

    return () => {
      console.log('unmounted')
      controller.abort()
    }

  // }, [_config])
  }, [url])


  return { data, loading, error }
}


