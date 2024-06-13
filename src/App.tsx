import React from 'react';
import InterestUptoCard from './components/cards/InterestUptoCard';
import { InterestUptoCardData } from './constants/data';

const App: React.FC = () => {

  return (
    <div className='bg-[#F7F8FA]'>
      {InterestUptoCardData.map((item) => (
        <InterestUptoCard
          key={item.id}
          bankName={item.bankName}
          interestRate={item.rate}
          features={[item.checked1, item.checked2]}
          buttonText={item.btn}
          iconSrc={item.icons}
          checkedImg={item.checkedImg}
          highlightBg={item.color.highlightBg}
          buttonColor={item.color.btnColor}
          bgColor={item.color.bgColor}
        />
      ))}
    </div>
  );
};

export default App;

