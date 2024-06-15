import React from 'react';

export interface AnswerCardDataProps {
  id: number;
  title: string;
  content: string;
  link: string;
}


const GetAnswerCard: React.FC<AnswerCardDataProps> = ({ title, content, link }) => {

  return (
    <div className="flex flex-col p-5 justify-around w-[256.67px] h-[194px] bg-white shadow shadow-[0px 5px 10px #0000000D]  rounded-md">
      <h1 className="text-xl font-bold break-words max-w-[170px]">{title}</h1>
      <p className="text-sm text-gray-700">{content}</p>
      <a
        href={link}
        className="text-sm text-blue-600 underline hover:text-blue-800 focus:text-blue-800 focus:outline-none"
      >
        Read more...
      </a>
    </div>
  );
};

export default GetAnswerCard;
