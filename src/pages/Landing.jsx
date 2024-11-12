import { useLoaderData } from 'react-router-dom';
import Axios from 'axios';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchWord = 'martini';
  const response = await Axios(`${cocktailSearchUrl}${searchWord}`);

  return { drinks: response.data.drinks, searchWord };
};

function Landing() {
  const { drinks, searchWord } = useLoaderData();
  console.log(drinks);

  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
