import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';

const CharacterValidator = () => {
  const { character, setCharacter, characterValid, setCharacterValid, characterValidationMessage, setCharacterValidationMessage } = useContext(StoreContext);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const validateCharacter = (name) => {
    if (!name) {
      setCharacterValid(false);
      setCharacterValidationMessage('Character name is required.');
      return;
    }
    const encodedName = encodeURIComponent(name.trim());
    fetch(`https://api.tibiadata.com/v4/character/${encodedName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Character not found');
        }
        return response.json();
      })
      .then(data => {
        if (data.character && data.character.name) {
          setCharacterValid(true);
          setCharacterValidationMessage('Character found ✓');
        } else {
          setCharacterValid(false);
          setCharacterValidationMessage('Character not found. Please check the name.');
        }
      })
      .catch(() => {
        setCharacterValid(false);
        setCharacterValidationMessage('Character not found. Please check the name.');
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCharacter(value);
    setCharacterValid(null);
    setCharacterValidationMessage('');
    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(setTimeout(() => {
      validateCharacter(value);
    }, 500));
  };

  const handleBlur = () => {
    if (typingTimeout) clearTimeout(typingTimeout);
    validateCharacter(character);
  };

  return (
    <div className="mb-4">
      <label htmlFor="character" className="block text-gray-700 mb-1">Character Name</label>
      <input
        type="text"
        id="character"
        value={character}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <span className={`block mt-1 text-sm ${characterValid ? 'text-green-600' : characterValid === false ? 'text-red-600' : ''}`}>
        {characterValidationMessage}
      </span>
    </div>
  );
};

export default CharacterValidator;
