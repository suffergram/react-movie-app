import './style';
import Button from '../Button/Button';
import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Popover from '../Popover/Popover';

export default function Card({ newModal, newDeleteModal, newMovieInfo, movie }) {
    const ref = React.useRef();

    const handleCardClick = (event) => {
        newMovieInfo(event.target.id);
    }

    return (
        <>
            <div className='card' ref={ref}>
                <img src={movie.url} onClick={handleCardClick} id={movie.id} />
                <Popover newModal={newModal} newDeleteModal={newDeleteModal} />
                <div className='description'>
                    <div className='year'>{movie.year}</div>
                    <p className='title'>{movie.name}</p>
                    <p className='genre'>{movie.genre}</p>
                </div>
            </div>
        </>
    )
}