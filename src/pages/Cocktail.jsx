import { Navigate, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQueryObj = (id) => {
  return {
    queryKey: ['singleCocktail', id],
    queryFn: async () => {
      const response = await Axios(`${singleCocktailUrl}${id}`);
      console.log(response);

      return response.data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQueryObj(id));

    return { id };
  };

function Cocktail() {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQueryObj(id));

  if (!data)
    return (
      <header
        style={{
          marginTop: '1rem',
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: ' translate(-50%, -50%)',
        }}
      >
        <Link to="/" className="btn">
          back home
        </Link>

        <h2
          style={{
            marginTop: '1rem',
            lineHeight: '2',
          }}
        >
          &uarr; Something went wrong.... Navigate to homePage
        </h2>
      </header>
    );
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          &larr; back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item} {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cocktail;
