import React from 'react'
import ProductImg from "../Assets/ProductImg.jpg"
import StarIcon from '@mui/icons-material/Star'; import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

function Product() {
  return (
    <div>
      <div className='mt-6'>
        <img src={ProductImg} alt="Product" />
        <h1 className='mt-16 text-white text-3xl font-semibold'>Everyday eye protection from sun</h1>
        <p className='text-[#C4CACF] mt-4 text-xs'>Achieve your dream skin goal with this complete package of skincare produts that will rejuvenate your day.</p>
      </div>
      <div className='font-xs text-white flex mt-8'>
        <div className='bg-[#079741] -p-2'>
          <StarIcon className='text-xl' />
        </div>
        <p className='text-sm'>4.4</p>
        <p>Click to read reviews</p>
        <KeyboardArrowRightOutlinedIcon />
      </div>
    </div>
  )
}

export default Product