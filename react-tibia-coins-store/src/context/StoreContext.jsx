import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(25);
  const pricePer25 = 9.99;
  const [email, setEmail] = useState('');
  const [character, setCharacter] = useState('');
  const [characterValid, setCharacterValid] = useState(null);
  const [world, setWorld] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  const price = (quantity / 25) * pricePer25;

  return (
    <StoreContext.Provider
      value={{
        quantity,
        setQuantity,
        pricePer25,
        price,
        email,
        setEmail,
        character,
        setCharacter,
        characterValid,
        setCharacterValid,
        world,
        setWorld,
        paymentMethod,
        setPaymentMethod,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
