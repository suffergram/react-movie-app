import './style';
import Button from '../Button/Button';
import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function Card({ newModal, newDeleteModal, movie }) {
    const ref = React.useRef();

    const [modal, setModal] = useState(false);

    const handleClick = () => {
        setModal(true);
    }

    const handleClose = () => {
        setModal(false);
    }

    return (
        <>
            <div className='card' ref={ref}>
                <img src={movie.url}/>
                <Button onClick={handleClick} className="menu">⋮</Button>
                <div className='description'>
                    <div className='year'>{movie.year}</div>
                    <p className='title'>{movie.name}</p>
                    <p className='genre'>{movie.genre}</p>
                </div>
            </div>
            <Modal isOpen={modal} onClose={handleClose} parentSelector={() => ref.current} className="menuModal" overlayClassName="menuOverlay">
                <div>
                    <Button onClick={() => newModal('edit')} className="edit">edit</Button>
                    <Button onClick={newDeleteModal} className="delete">delete</Button>
                </div>
            </Modal>
        </>
        
    )
}