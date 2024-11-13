import { useLoaderData } from 'react-router-dom';
import Axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchWord) => {
  return {
    queryKey: ['search', searchWord || 'a'],
    queryFn: async () => {
      const response = await Axios(`${cocktailSearchUrl}${searchWord}`);

      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchWord = url.searchParams.get('search') || 'a';

    await queryClient.ensureQueryData(searchCocktailsQuery(searchWord));
    return { searchWord };
  };

function Landing() {
  const { searchWord } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchWord));

  return (
    <>
      <SearchForm searchWord={searchWord} />
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
