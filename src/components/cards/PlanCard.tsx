import React from 'react';

interface PlanCardProps {
  statusTitle: string;
  bankName: string;
  date: string;
  monthYear: string;
  depositAmount: string;
  tenure: string;
  interestRate: string;
  btn1: string;
  btn2: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  statusTitle, bankName, date, monthYear,
  depositAmount, tenure, interestRate, btn1, btn2
}) => {
  return (
    <div className='w-[400px] min-h-[240px] h-full bg-white flex flex-col justify-evenly px-4 py-2 border shadow shadow-[0px 5px 10px #0000000D]'>
      {/* 1 */}
      <h1 className='text-[16px] font-bold'>{statusTitle}</h1>

      {/* 2 */}
      <div className='flex items-center justify-between gap-1'>

        <div className='flex flex-col justify-between'>
          <h1 className='text-[#929294] text-[12px] font-semibold'>Scheduled On</h1>
          <div className='w-[76px] h-[66px]'>
            <p className='text-[40px] bg-[#F3F3F4] font-bold text-center'>{date}</p>
            <p className='text-white bg-[#CE5151] text-center'>{monthYear}</p>
          </div>
        </div>

        <div className='flex flex-col justify-between flex-1 h-full gap-2 p-4'>
          <h1 className='text-sm font-bold'>{bankName}</h1>
          <div className='grid grid-cols-3 gap-2'>
            <div>
              <h1 className='text-[#929294] text-sm'>Deposit Amt</h1>
              <p className='text-sm font-bold'>Rs. {depositAmount}</p>
            </div>
            <div>
              <h1 className='text-[#929294] text-sm'>Tenure</h1>
              <p className='text-sm font-bold'>{tenure}</p>
            </div>
            <div>
              <h1 className='text-[#929294] text-sm'>Interest Rate</h1>
              <p className='text-sm font-bold'>{interestRate}%</p>
            </div>
          </div>
        </div>

      </div>

      {/* 3 */}
      <div className='flex justify-between gap-5 mt-5'>
        <button className='border w-[170px] h-[42px] rounded-md font-semibold bg-[#3B39D9] text-white capitalize text-[16px]'>
          {btn1}
        </button>
        <button className='border w-[170px] h-[42px] rounded-md font-semibold border-[#3B39D9] text-[#3B39D9] text-[16px]'>
          {btn2}
        </button>
      </div>

    </div>
  );
};

export default PlanCard;
