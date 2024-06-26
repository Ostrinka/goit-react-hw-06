import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  
  return (
    <div>
      <p>Find contacts by name</p>
      <input className={css.input}
        type="text"
        value={filter.name}
        onChange={handleChange}
      />
    </div>
  );
}

