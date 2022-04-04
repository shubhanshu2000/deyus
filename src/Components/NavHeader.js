import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';








function NavHeader() {
  return (
    <div>
      <div className='flex justify-between  text-white'>
        <MenuOutlinedIcon />
        <div className='hidden md:block'>
          <h1>Home</h1>
          <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Specifications</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Orders</a></li>
          </ul>
        </div>
        <ShoppingCartOutlinedIcon />
      </div>
      <div className='border-b-2 mt-4 border-[#585858]'></div>
    </div>
  )
}

export default NavHeader