import React, { useState } from 'react';
import { createImageUrl } from '../services/movieService';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { UserAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'

function MovieItem({ movie }) {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();

  const navigate=useNavigate()

  const { title, backdrop_path, poster_path } = movie;

  const markFavShow = async (e) => {
    e.stopPropagation()
    const userEmail = user?.email;  

    
    if (userEmail) {
      const userDoc = doc(db, 'users', userEmail);
      setLike(!like);
      try {
        await updateDoc(userDoc, {
          favShows: arrayUnion({ ...movie }),
        });
      } catch (error) {
        console.error("Failed to update favorite:", error);
      }
    } else {
      alert('Please log in to save movies');
    }
  };

  const params = new URLSearchParams(movie).toString()

  return (
    <div onClick={() => navigate(`/MovieTrailer/${params}`) } className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
      <img
        className='w-full h-40 block object-cover object-top'
        src={createImageUrl(backdrop_path ?? poster_path, 'w500')}
        alt={title || 'Movie'}
      />
      <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 transition duration-300'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-bold text-white text-center px-2'>
          {title}
        </p>
        <p onClick={markFavShow} className='cursor-pointer'>
          {like ? (
            <FaHeart size={20} className='absolute top-2 left-2 text-red-500' />
          ) : (
            <FaRegHeart size={20} className='absolute top-2 left-2 text-gray-300' />
          )}
        </p>
      </div>
    </div>
  );
}

export default MovieItem;