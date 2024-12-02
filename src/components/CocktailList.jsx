import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktail found......</h4>
    );
  }

  const formattedDrinks = drinks.map((drink) => {
    const {
      idDrink: id,
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strGlass: glass,
    } = drink;
    // const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;

    return {
      id,
      name,
      image,
      info,
      glass,
    };
    // return {
    //   id: idDrink,
    //   name: strDrink,
    //   image: strDrinkThumb,
    //   info: strAlcoholic,
    //   glass: strGlass,
    // };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
}
export default CocktailList;
