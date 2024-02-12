import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import style from "./ellipsis.module.css";
import { deleteDrug } from "../../store/thunk";


const Ellipsis = ({drugId}) => {
  // const drug = useSelector((state) => state.drugs);
  // console.log({ drug });

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const dispatch = useDispatch()

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this drug?")
    if (confirmDelete) {
      dispatch(deleteDrug(drugId))
    }
  }


useEffect(() => {
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, []);

 const toggleMenu = () => {
  setShowMenu((prev) => !prev) }

  return (
    <div className={style.btns_container}>
      <button onClick={toggleMenu}>
        <IoEllipsisVertical />
      </button>
      {showMenu && (
        <div ref={menuRef} className={style.menu_btns}>
          <button><MdOutlineRemoveRedEye /> View</button>
          <button><FaRegEdit /> Edit</button>
          <button onClick={handleDelete}><RiDeleteBin6Line /> Delete</button>
        </div>
      )}
    </div>
  );
};

export default Ellipsis;
