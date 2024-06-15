

import React, { useState } from 'react';
import GetAnswerCard, { AnswerCardDataProps } from '../cards/GetAnswerCard';
import Heading from '../common/Heading';

interface GetAnswerSliderProps {
  data: AnswerCardDataProps[];
}

const GetAnswerSlider: React.FC<GetAnswerSliderProps> = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  // const visibleCards = 3;

  const goToNext = () => {
    const nextIndex = startIndex + 1;
    setStartIndex(nextIndex >= data.length ? 0 : nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = startIndex - 1;
    setStartIndex(prevIndex < 0 ? data.length - 1 : prevIndex);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <Heading title="Get Answer" subText="to all your questions" className="m-2" />
        <div className="flex">
          <div onClick={goToPrevious} className="text-5xl font-extrabold cursor-pointer">
            <img src="/assets/greater-than.svg" alt="" className='w-8 h-8 rotate-180' />
          </div>
          <div onClick={goToNext} className="text-5xl font-extrabold cursor-pointer">
            <img src="/assets/greater-than.svg" alt="" className='w-8 h-8' />
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-3 justify-evenly ">
        {data.map((item) => (
          <div
            key={item.id}
            className={`transition-transform duration-300 transform `}
          >
            <GetAnswerCard id={item.id} title={item.title} content={item.content} link={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAnswerSlider;

