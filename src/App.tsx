import React from 'react';

import { InterestUptoCardData, getAnswerCardData, planCardData } from './constants/data';
import Heading from './components/common/Heading';
import Navbar from './components/common/Navbar';
import FDPortfolio from './components/charts/FDPortfolio';
import FDTimeline from './components/calendar/FDTimeline';
import InterestUptoCard from './components/cards/InterestUptoCard';
import GetAnswerSlider from './components/slider/GetAnswerSlider';
import PlanCard from './components/cards/PlanCard';

const App: React.FC = () => {
  return (
    <main className='bg-[#F7F8FA] w-full h-full '>


      <Navbar />

      <div className='mx-20'>

        <Heading title={" Welcome, Johan Paul"} className='my-5' />

        <div className='flex flex-col items-center justify-center gap-5 pb-5 lg:flex-row'>
          <FDPortfolio />
          <FDTimeline />
        </div>

        <div className='flex flex-col items-start justify-center gap-4 lg:flex-row '>
          <div className='grid w-full grid-cols-1 gap-2 lg:grid-cols-2'>
            {
              InterestUptoCardData.map((item) => (
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
              ))
            }


            <div className='w-full col-span-2 '>
              <GetAnswerSlider data={getAnswerCardData} />
            </div>

          </div>

          <div className='h-full '>
            {
              planCardData.map((item) => (
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
              ))
            }
          </div>
        </div>


      </div>

    </main>
  );
};

export default App;
