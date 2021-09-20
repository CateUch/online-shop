import style from './Card.module.css'

type PropsType = {
  className?: string,
  children?: JSX.Element|JSX.Element[]
}

const Card = (props: PropsType) => {
  return (
    <section
      className={`${style.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
