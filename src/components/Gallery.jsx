import Carousel from 'better-react-carousel'
import React, { useEffect } from 'react'
import './Gallery.css'
import {useNavigate } from 'react-router-dom'

const Gallery = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('name')){
      navigate('/login')
    }
  })
  return (

    <>
      <div className="gallery_container">
        <Carousel cols={3} rows={2} loop autoplay={3000}>
          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.pinimg.com/736x/c2/29/dd/c229dd69f96494a076a910437ec5ebbb.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://storage.googleapis.com/regalflowers-cdn/img-2022-07-Regal-RedRoses-Bouquet_11zon-1-scaled.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irisflowers.ae/cdn/shop/products/image_57d69c0b-93f4-4e40-8f7f-254646756a22.jpg?v=1678127878&width=1500" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=2&w=220" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://irishomefragrances.com/cdn/shop/products/1.-INPT0477US.jpg?v=1704262172" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CqTzh7qssPyVpmFC7lj3PG-qC9DX5gUvA&s" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.bloomsflora.com/uploads/product/bloomsflora/5345_20_15805.webp" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.flowerzila.com/wp-content/uploads/2021/02/19.jpg" height="300" width="300" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dodomarket.mu/cdn/shop/files/Luxury-of-the-Day-Flower-Arrangement-Closeup-DodoMarket-delivery-Mauritius.jpg?v=1741158683" height="300" width="300" alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Gallery