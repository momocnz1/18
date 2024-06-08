
import Navbar from "../component/navbar";
import ShopcardList from "../component/shopcardList";
import Banner from "../component/banner";
import './home.css'

export default function Home() {
  return (
    <><Navbar />
    <Banner/>
    <p  style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '25px',color:'#EE9AE5' }}>✿ Promotion For You ✿</p>
    <ShopcardList/>
    {/* <p style={{fontSize:'15px',fontWeight: 'bold',color:'#4B4DC8'}}>• ·̭ •̥    *  𐬹 ੈ ˖   ♥︎ </p> */}
    <p  style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '25px',color:'#EE9AE5' }}>ʚїɞ Product For You ʚїɞ</p>
    <ShopcardList/>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: '25px', color:'#EE9AE5'}}>𐐪𐑂 Latest 𐐪𐑂</p>
    <ShopcardList/>
    </>
  );
}
