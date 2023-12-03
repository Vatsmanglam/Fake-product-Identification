import React from 'react'

const CustomButton = ({btnType , title , handleClick, styles}) => {
  return (
    <button
    type={btnType}
    className={`${styles} rounded-[10px] text-[#000] text-[16px] leading-[26px] font-bold min-h-[32px] px-4`}
    onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton