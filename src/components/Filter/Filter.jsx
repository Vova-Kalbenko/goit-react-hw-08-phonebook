import PropTypes from 'prop-types';
// import { Label, Input } from './Filter.styled';
// =============================
import css from './Filter.module.css'
export const Filter = ({ onChangeFilter }) => {
  return (
    <div className={css.FilterWrapper}>
      <label>
        <span className={css.FilterFormSpan}>Search contact</span>
        <input onChange={e => onChangeFilter(e)} type="text" name="filter" placeholder='Seacrh' className={css.FilterFormInput} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};