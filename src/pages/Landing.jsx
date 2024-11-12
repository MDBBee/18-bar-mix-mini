import { useLoaderData } from 'react-router-dom';
import Axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const searchWord = url.searchParams.get('search') || 'a';

  // const searchWord =
  //   url?.search?.split('=')[1]?.split('+')?.join('') || 'martini';
  const response = await Axios(`${cocktailSearchUrl}${searchWord}`);

  return { drinks: response.data.drinks, searchWord };
};

function Landing() {
  const { drinks, searchWord } = useLoaderData();

  return (
    <>
      <SearchForm searchWord={searchWord} />
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
