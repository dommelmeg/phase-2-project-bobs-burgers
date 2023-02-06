import React from "react";
import { Button } from '@chakra-ui/react'

const FavoriteBtn = ({ isFavorite, setIsFavorite, character, favoriteCharacter, setFavoriteCharacters, favoriteCharacters }) => {
  const handleFavoriteBtn = () => {
    if (isFavorite === false) {
      setFavoriteCharacters([...favoriteCharacters, character])
    } else {
      const filterFavorites = favoriteCharacters.filter((character) => character.id !== favoriteCharacter.id)
      setFavoriteCharacters(filterFavorites)
    }
    
  }

  return (
    <Button
      variant={isFavorite ? 'solid' : 'outline'}
      colorScheme={isFavorite ? 'pink' : 'yellow'}
      onClick={handleFavoriteBtn}  
    >{isFavorite ? 'Unfavorite' : 'Favorite'}</Button>
  )
}

export default FavoriteBtn