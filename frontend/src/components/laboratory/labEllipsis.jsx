import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import style from "./../ellipsis/ellipsis.module.css";
import { useNavigate } from "react-router";
import { deleteLab } from "../../store/thunk";
import { toast } from "react-toastify"


const LabEllipsis = ({labId}) => {
  const {lab} = useSelector((state) => state.labs);

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleView = (id) => {
    navigate(`/fetchlab/${id}`)
  }

  const handleUpdate = (id) => {
    navigate(`/updatelabs/${id}`)
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this lab entry?")
    if (confirmDelete) {
      dispatch(deleteLab(labId))
      toast.success("Deleted successfully!")
    } else {
      toast.error('Not deleted')
    }
  } 

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== buttonRef.current) {
      setShowMenu(false);
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, []);

 const toggleMenu = () => {
  setShowMenu((prev) => !prev)}

  return (
    <div className={style.btns_container}>
      <button onClick={toggleMenu} ref={buttonRef}>
        <IoEllipsisVertical />
      </button>
      {showMenu && (
        <div ref={menuRef} className={style.menu_btns}>
          <button onClick={() => handleView(labId)}><MdOutlineRemoveRedEye /> View</button>
          <button onClick={() => handleUpdate(labId)}><FaRegEdit /> Edit</button>
          <button onClick={handleDelete}><RiDeleteBin6Line /> Delete</button>
        </div>
      )}
    </div>
  );
};

export default LabEllipsis;
