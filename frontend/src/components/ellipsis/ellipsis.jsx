import React from "react";
import { useState, useEffect, useRef } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import style from "./ellipsis.module.css";

const Ellipsis = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

//       if (menuRef.current && !menuRef.current.contains(event.target))
//       setShowMenu(false)
//     }
//   };
    
//    document.addEventListener('mousedown', handleOutsideClick);

//    return() => {
//     document.removeEventListener('mousedown', handleOutsideClick)
//    }

// }, []);

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
          <button><RiDeleteBin6Line /> Delete</button>
        </div>
      )}
    </div>
  );
};

export default Ellipsis;
