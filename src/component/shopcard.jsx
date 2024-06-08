import React, { useState, useEffect } from 'react';
import cart from '../icon/shopping-cart-add.png';
import cartadd from '../icon/cart-add.png';
import exit from '../icon/rejected.png';
import './shopcard.css';

function Shopcard() {
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);
  const [isDetail, setIsDetail] = React.useState(false);

  useEffect(() => {
    if (isAddedToCart) {
      const timer = setTimeout(() => {
        setIsAddedToCart(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAddedToCart]);

  const Addproduct = () => {
    setIsAddedToCart(true);
  };

  const ShowDetail = () => {
    setIsDetail(true);
  };

  const hideDetail = () => {
    setIsDetail(false);
  };

  return (
    <div className='Shopcard' onClick={ShowDetail}>
      <div className='img'></div>
      <p style={{ color: '#f1f1f1', margin: '0.6rem' }}>product</p>
      <img
        src={cart}
        alt='Cart Icon'
        style={{ height: '1.5rem', width: '1.5rem', display: 'flex', marginLeft: '10rem' }}
        onClick={Addproduct}
      />
      {isAddedToCart && (
        <div className='popup-container'>
          <div className='popup'>
            <span className='close' onClick={() => setIsAddedToCart(false)}>
              &times;
            </span>
            <p>The product has been added to the cart (✿◠‿◠)</p>
          </div>
        </div>
      )}
      {isDetail && <ShopcardDetail hideDetail={hideDetail} />}
    </div>
  );
}

function ShopcardDetail({ hideDetail }) {
  const [isDetail, setIsDetail] = useState(true); // ใช้ useState เพื่อสร้าง state isDetail
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);

  useEffect(() => {
    // เมื่อ isDetail เปลี่ยนแปลงให้เรียกใช้ hideDetail เพื่อปิด ShopcardDetail
    if (!isDetail) {
      hideDetail();
    }
  }, [isDetail, hideDetail]);
  useEffect(() => {
    if (isAddedToCart) {
      const timer = setTimeout(() => {
        setIsAddedToCart(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAddedToCart]);

  const Addproduct = () => {
    setIsAddedToCart(true);
  };
  return (
    <div className='ShopcardDetail'>
      <img
        src={exit}
        alt='Exit Icon'
        style={{ height: '1rem', width: '1rem', display: 'flex', justifyContent: 'flex-end' }}
        onClick={() => setIsDetail(false)} 
      />
      <div className='imgbig'></div>
      <p style={
        {color:'#f1f1f1'}
      }>product detail</p>
      <img
        src={cartadd}
        alt='Cart Icon'
        style={{ height: '1.5rem', width: '1.5rem', display: 'flex', marginLeft: '28rem' }}
        onClick={Addproduct}
      />
      {isAddedToCart && (
        <div className='popup-container'>
          <div className='popup'>
            <span className='close' onClick={() => setIsAddedToCart(false)}>
              &times;
            </span>
            <p>The product has been added to the cart (✿◠‿◠)</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shopcard;
