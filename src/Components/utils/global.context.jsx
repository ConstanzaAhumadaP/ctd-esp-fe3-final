import { createContext, useContext, useEffect, useReducer} from "react";


const ContextGlobal = createContext();
const themes = {
  dark: {
      theme: true,
      className: 'dark'
  },
  light: {
      theme: false,
      className: 'light'
     
  }
}

const initialDentistState = {dentistList:[], dentistDetail:{}}
const initialThemeState= themes.light
const initialFavState =  {favList: JSON.parse(localStorage.getItem('favs')) || [] } 
const dentistReducer = (state, action) => {
  switch(action.type){
    case 'GET_DENTISTS':
      return {dentistList: action.payload, dentistDetail: state.dentistDetail}
  case 'GET_DENTIST':
      return {dentistDetail: action.payload, dentistList: state.dentistList}
      default:
          throw new Error
  }
}

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return themes.dark
      case 'SWITCH_LIGHT':
          return themes.light
      default:
          throw new Error
  }
}
const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favList: [...state.favList, action.payload], // Añadir al array de favoritos
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favList: state.favList.filter((fav) => fav.id !== action.payload.id), // Eliminar del array de favoritos
      };
    default:
      return state;
  }
};

          




const ContextProvider = ({children}) => {
  
  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialDentistState)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  
  const url = 'https://jsonplaceholder.typicode.com/users'



useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => dentistDispatch({type: 'GET_DENTISTS', payload: data}))
}, [])

const getDentist = (id) => {
  let url = 'https://jsonplaceholder.typicode.com/users/' + id;
  fetch(url)
    .then(response => response.json())
    .then(data => dentistDispatch({ type: 'GET_DENTIST', payload: data }))
}


 
  return (
    <ContextGlobal.Provider value={{dentistState, themeState, themeDispatch, favState, favDispatch, getDentist}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useGlobalStates = () => useContext(ContextGlobal)
