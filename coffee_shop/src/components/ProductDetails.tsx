import { ProductType } from '../context/ProductsProvider'
import '../styles/ProductDetails.css'
import { getImageUrl } from './Product'


type ProductDetailsProps = {
  product: ProductType
  onClose: () => void
}


const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
  const imgSrc: string = getImageUrl(product.sku)

  return (
    <div className="modal_overlay">
      <div className="modal">
        <div className="modal_content">
          <img
            src={imgSrc}
            alt={product.name}
            className="product_image"
            onClick={onClose}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {/* Add more details here */}
          <button className="close_modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
