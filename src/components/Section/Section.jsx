import PropTypes from 'prop-types';
// import {SectionPhonebook,Title} from './Section.styled';
// ================================
export const Section =({title, children})=>{
  return(
    <section>
      <h2>{title}</h2>
      <div>{children}</div>      
    </section>
  )
}

Section.propTypes = {
  title:PropTypes.string.isRequired,
  children:PropTypes.node.isRequired
}