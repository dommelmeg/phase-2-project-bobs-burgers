import React, { useContext } from "react";
import { Button } from '@chakra-ui/react'
import { FavoriteCharacterContext } from "../context/favoriteCharacters";

const FavoriteBtn = ({ character }) => {
  const { favoriteCharacters, setFavoriteCharacters } = useContext(FavoriteCharacterContext)
  const favCharacterIds = favoriteCharacters.map(favCharacter => favCharacter.id)
  const isFavorite = favCharacterIds.includes(character.id)

  const handleFavoriteBtn = () => {
    if (!isFavorite) {
      setFavoriteCharacters([...favoriteCharacters, character])
    } else {
      const filterFavorites = favoriteCharacters.filter((favoriteCharacter) => favoriteCharacter.id !== character.id)
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