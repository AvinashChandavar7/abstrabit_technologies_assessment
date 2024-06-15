import React from 'react'

interface HeadingProps {
  title: string;
  subText?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subText, className }) => {
  return (
    <div className='font-bold'>
      <div className={`text-2xl font-bold ${className}`}>
        {title}
      </div>

      {subText && <div className={`text-sm ${className}`}>
        {subText}
      </div>}
    </div>
  )
}

export default Heading