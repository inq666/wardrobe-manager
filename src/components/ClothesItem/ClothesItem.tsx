import React, { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow'
import { IClothes } from '../../interfaces';
import './_clothes-item.scss';


const ClothesItem: React.FC<IClothes> = (props) => {
  const [showModal, setShowModal] = useState<Boolean>(false)

  const deleteItem = () => {
    const { id } = props
    if (props.onDelete) props.onDelete(id);
  }

  const editTitle = () => {
    const { id } = props
    const title = 'newTitle'
    if (props.onEdit) props.onEdit(title, id);
  }

  const showModalWindowHandler = () => {
    setShowModal(!showModal)
  }
  const { clothesTitle, url, id } = props;
  return (
    <div className="item" id={id}>
      {showModal ? <ModalWindow
        onShowModal={showModalWindowHandler}
        title={clothesTitle} />
        :
        null}
      <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" />
        <div className="dropdown-menu">
          <span className="dropdown-item" onClick={showModalWindowHandler}>Edit</span>
          <span className="dropdown-item">Add category</span>
          <div className="dropdown-divider"></div>
          <span className="dropdown-item" onClick={deleteItem}>Delete</span>
        </div>
      </div>
      <img className="item__image" src={url} />
      <div className="item__description">{clothesTitle}</div>
    </div>
  )
}

export default ClothesItem;

