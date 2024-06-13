import React from 'react'

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className='my-10 text-2xl font-bold '>
      {title}
    </div>
  )
}

export default Heading