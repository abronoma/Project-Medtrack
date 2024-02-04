import React from 'react';
import { useState } from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import style from './ellipsis.module.css'


const Ellipsis = () => {
const [showMenu, setShowMenu] = useState(false)


  return (
    <div className={style.btns_container}>
        <button onClick={()=> setShowMenu(prev => !prev)}><IoEllipsisVertical/></button>
        {
            showMenu&& (
                <div className={style.menu_btns}>
                <button><MdOutlineRemoveRedEye/></button>
                <button><FaRegEdit/></button>
                <button><RiDeleteBin6Line/></button>
                </div>
            )
        }
    </div>
  )
}

export default Ellipsis