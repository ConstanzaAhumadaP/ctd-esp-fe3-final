import React from "react";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ dentist, fav, isHome }) => {
  const { favDispatch, favState } = useGlobalStates();

  // Función para manejar agregar o eliminar de favoritos
  const toggleFav = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Solo permitir agregar en Home, no eliminar
    if (isHome) {
      // Agregar a favoritos
      favDispatch({ type: "ADD_FAV", payload: dentist });
      alert("Dentist added to favorites");
    } else {
      // Permitir eliminar o agregar según el estado
      const isFav = favState.favList.some((favDentist) => favDentist.id === dentist.id);
      if (isFav) {
        favDispatch({ type: "REMOVE_FAV", payload: dentist });
        alert("Dentist removed from favorites");
      } else {
        favDispatch({ type: "ADD_FAV", payload: dentist });
        alert("Dentist added to favorites");
      }
    }
  };

  // Verificar si el dentista está en los favoritos
  const isFav = favState.favList.some((favDentist) => favDentist.id === dentist.id);

  return (
    <div className="card">
      <img className="imgdoctor" src="/images/doctor.jpg" alt="Foto doctor" />
      <h3>{dentist.name}</h3>
      <h4>{dentist.username}</h4>
      <button onClick={toggleFav} className="favButton">
        {isFav ? "⭐" : "⭐"} {/* Si es favorito, mostramos la estrella llena */}
      </button>
    </div>
  );
};

export default Card;
