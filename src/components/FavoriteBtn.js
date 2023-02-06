import React from "react";
import { Button } from '@chakra-ui/react'

const FavoriteBtn = ({ character, setFavoriteCharacters, favoriteCharacters }) => {
  const isFavorite = favoriteCharacters.includes(character)

  const handleFavoriteBtn = () => {
    if (!isFavorite) {
      setFavoriteCharacters([...favoriteCharacters, character])
    } else {
      const filterFavorites = favoriteCharacters.filter((favoriteCharacter) => favoriteCharacter !== character)
      setFavoriteCharacters(filterFavorites)
    }
  }

  return (
    <Button
      variant={isFavorite ? 'solid' : 'outline'}
      colorScheme='yellow'
      onClick={handleFavoriteBtn}  
    >
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </Button>
  )
}

export default FavoriteBtn