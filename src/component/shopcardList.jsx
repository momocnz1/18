import React,{useState} from 'react';
import Shopcard from './shopcard';
import './shopcard.css';

export default function ShopcardList() {
    const [showAll, setShowAll] = useState(false);
    const shopcardCount =16; 
    const shopcardsPerPage = 4;

    const handleToggleShow = () => {
      setShowAll(!showAll);
    };

    const renderShopcards = () => {
        const totalShopcards = showAll ? shopcardCount : shopcardsPerPage;
        const shopcards = [];

        for (let i = 0; i < totalShopcards; i++) {
            shopcards.push(<Shopcard key={i} />);
        }

        return shopcards;
    };

  
    return (
        <>
      <div className='ShopcardList'>
         {renderShopcards()}
      </div>
        {shopcardCount > shopcardsPerPage && (
          <div style={{ display: 'flex', justifyContent: 'center' }} >
              <button onClick={handleToggleShow} className='buttomT'>
                  {showAll ? '˗ˏˋ  Hide  ´ˎ˗' : '˗ˏˋ  Show More  ´ˎ˗'}
              </button>
          </div>
        )}  
      </>
    );
  }
