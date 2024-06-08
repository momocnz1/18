import React, { useState } from 'react';
import Navbar from '../component/navbar'
import './creat.css'

export default function Creat() {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProductData(prevState => ({
        ...prevState,
        imageFile: file,
        imageUrl: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div className="imageInput" style={{ backgroundImage: `url(${productData.imageUrl})` }}>
            {!productData.imageUrl && (
              <div>
                <input
                  accept="image/bmp,image/jpeg,image/png,image/tiff,image/webp,video/mp4,video/x-m4v,video/quicktime"
                  aria-label="อัปโหลดไฟล์"
                  data-test-id="storyboard-upload-input"
                  id="storyboard-upload-input"
                  multiple=""
                  tabIndex="0"
                  type="file"
                  className="imageFileInput"
                  onChange={handleImageChange}
                />
                 {!productData.imageUrl && (
                <p className='uploadImage'>Upload</p>
              )}
              </div>
            )}
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <form onSubmit={handleSubmit} disabled={!productData.imageUrl}>
            <div>
              <label htmlFor="name">Product Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={!productData.imageUrl}>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}
