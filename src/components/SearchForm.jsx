import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchWord }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const defaultValue = searchWord === 'a' ? '' : searchWord;
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          required
          defaultValue={defaultValue}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
