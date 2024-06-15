import React from 'react';
import InterestUptoCard from './components/cards/InterestUptoCard';
import { InterestUptoCardData, getAnswerCardData, planCardData } from './constants/data';
import PlanCard from './components/cards/PlanCard';
import Heading from './components/common/Heading';
import FDPortfolio from './components/charts/FDPortfolio';
import GetAnswerSlider from './components/slider/GetAnswerSlider';
import Navbar from './components/common/Navbar';
import FDTimeline from './components/calendar/FDTimeline';

const App: React.FC = () => {




  return (
    <div className='bg-[#F7F8FA] '>

      <Navbar />
      <Heading title={" Welcome, Johan Paul"} />

      <div>
        <GetAnswerSlider data={getAnswerCardData} />
      </div>
      <div>
        <FDPortfolio />

        <FDTimeline />
      </div>



      <div className='flex'>


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

        <div className='m-5'>
          {planCardData.map((item) => (
            <PlanCard
              key={item.id}
              statusTitle={item.statusTitle}
              bankName={item.bankName}
              date={item.date}
              monthYear={item.monthYear}
              depositAmount={item.depositAmount}
              tenure={item.tenure}
              interestRate={item.interestRate}
              btn1={item.btn1}
              btn2={item.btn2}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;

