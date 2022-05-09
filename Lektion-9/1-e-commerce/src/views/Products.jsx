import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../store/actions/productCatalogActions'


const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductCatalog())
    }, [dispatch])

  return (
    <div>Products</div>
  )
}

export default Products