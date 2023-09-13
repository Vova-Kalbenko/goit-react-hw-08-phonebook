import PropTypes from 'prop-types';
// import { Label, Input } from './Filter.styled';
// =============================
export const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <label>
        Шукати контакт
        <input onChange={e => onChangeFilter(e)} type="text" name="filter" />
      </label>
    </>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};