import { createContext, useState, useContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (e, id) => {
    e.preventDefault();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, handleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
