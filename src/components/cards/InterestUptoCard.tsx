import React from 'react';

interface InterestUptoCardProps {
  bankName: string;
  interestRate: string;
  features: string[];
  buttonText: string;
  checkedImg: string;
  iconSrc: string;
  highlightBg: string;
  buttonColor: string;
  bgColor: string;
}

interface FeatureItemProps {
  iconSrc: string;
  text: string;
  bg: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, text, bg }) => (
  <div className={`flex items-center justify-start gap-2 px-2 py-1 rounded-md`} style={{ backgroundColor: bg }}>
    <img src={iconSrc} alt="icon" />
    <h1>{text}</h1>
  </div>
);

const InterestUptoCard: React.FC<InterestUptoCardProps> = ({
  bankName, interestRate, features, buttonText,
  checkedImg, iconSrc, highlightBg, buttonColor, bgColor,
}) => {
  return (
    // <div>/
    <div className="min-w-[398px] min-h-[202px] h-full shadow-sm shadow-[0px 5px 10px #0000000D] border-white border-4 px-2  flex flex-col justify-center gap-4" style={{ backgroundColor: bgColor }}>
      <div className="flex items-center gap-2">
        <img src={iconSrc} alt="icons" className="mix-blend-multiply" />
        <h1>{bankName}</h1>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2 text-sm">
        {features.map((feature, index) => (
          <FeatureItem key={index} iconSrc={checkedImg} text={feature} bg={highlightBg} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#737078] font-semibold">Interest Upto</p>
          <h1 className="text-sm font-bold">{interestRate}% p.a</h1>
        </div>
        <button className={`w-[133px] h-[42px] text-white rounded-sm font-semibold`} style={{ backgroundColor: buttonColor }}>
          {buttonText}
        </button>
      </div>
    </div>
    // </div>
  );
};

export default InterestUptoCard;
