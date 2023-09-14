import PropTypes from 'prop-types';
import css from './Section.module.css'
// import {SectionPhonebook,Title} from './Section.styled';
// ================================
export const Section =({title, children})=>{
  return(
    <section className={css.SectionTitle}>
      <h2>{title}</h2>
      <div>{children}</div>      
    </section>
  )
}

Section.propTypes = {
  title:PropTypes.string.isRequired,
  children:PropTypes.node.isRequired
}