import React from 'react'
import {useRouter} from 'next/router'
function ProductReview() {
    const router = useRouter()
    const {productId, reviewid} = router.query;
   
  return (
    <div>Product id is {productId} and review id is {reviewid}</div>
  )
}

export default ProductReview