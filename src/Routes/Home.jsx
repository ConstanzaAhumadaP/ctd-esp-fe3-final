import React from 'react';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Components/utils/global.context';

const Home = () => {
  const { dentistState, themeState, favState } = useGlobalStates();

  return (
    <main className={themeState.className}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentistState.dentistList.map((dentist) => {
          const isFavorite = favState.favList.some((fav) => fav.id === dentist.id);
          return (
            <Link key={dentist.id} to={'/detail/' + dentist.id}>
              <Card dentist={dentist} fav={isFavorite} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
