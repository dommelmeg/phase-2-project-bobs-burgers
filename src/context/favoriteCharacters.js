import React, { useState } from "react";

const FavoriteCharacterContext = React.createContext()

const FavoriteCharacterProvider = ({children}) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([])

  return (
    <FavoriteCharacterContext.Provider 
      value={{ favoriteCharacters, setFavoriteCharacters }}
    >
      {children}
    </FavoriteCharacterContext.Provider>
  )
}

export { FavoriteCharacterContext, FavoriteCharacterProvider }
