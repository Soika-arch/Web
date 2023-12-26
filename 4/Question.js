import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Question = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const email = params.get('email');
  const message = params.get('message');

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className='question'>
      <h1>Дякуємо за звернення!</h1>
      <p>Ім'я: {name}</p>
      <p>Email: {email}</p>
      <p>Повідомлення: {message}</p>
      <p>Найближчим часом ви отримаєте відповідь на пошту {email}.</p>
      <button className='back' onClick={handleGoBack}>На головну</button>
    </div>
  );
};

export default Question;