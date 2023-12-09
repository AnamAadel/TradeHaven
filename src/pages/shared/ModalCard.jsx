import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/useGlobalContext';
import { useAuth } from '../../context/AuthProvider';

function ModalCard({item, removeItem}) {
  const {closeAllModal} = useAuth()
  return (
    <li>
      <Link to={`/product/${item._id}`} onClick={closeAllModal} className="image"><img src={item.image}
        alt="Cart product Image" /></Link>
      <div className="content">
        <Link to={`/product/${item._id}`} onClick={closeAllModal} className="title">{item.name}</Link>
        <span className="quantity-price">{item.qty} x <span className="amount">${item.price}</span></span>
        <a className="remove cursor-pointer" onClick={()=> removeItem(item._id)}>×</a>
      </div>
    </li>
  )
}

export default ModalCard