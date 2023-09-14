import PropTypes from 'prop-types';
// import { Label, Input } from './Filter.styled';
// =============================
import css from './Filter.module.css'
export const Filter = ({ onChangeFilter }) => {
  return (
    <div className={css.FilterWrapper}>
      <label>
        Search contact
        <input onChange={e => onChangeFilter(e)} type="text" name="filter" className={css.FilterFormInput} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};