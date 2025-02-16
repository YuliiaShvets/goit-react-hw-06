import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters?.filters || ""); 
  return (
    <div className={s.searchForm}>
      <label className={s.searchLabel}>Find contacts by name</label>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => dispatch(setFilters(e.target.value))}
        className={s.inputLabel}
      />
    </div>
  );
};

export default SearchBox;


