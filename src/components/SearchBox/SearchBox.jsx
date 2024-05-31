import css from './SearchBox.module.css';

export default function SearchBox({ filter, setFilter }) {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}