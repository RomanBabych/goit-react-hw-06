import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ searchTerm, setSearchTerm }) {
  const searchInputId = useId();
  return (
    <div className={css.searchInputWrapper}>
      <label className={css.searchInputLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        id={searchInputId}
        className={css.searchInput}
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}
