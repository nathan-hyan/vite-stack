import styles from '~scss/card.module.scss';

interface Props {
  image: string;
  title: string;
  buttonText?: string;
  onButtonClick: () => void;
}

function Card({ image, title, buttonText, onButtonClick }: Props) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h1>{title.toUpperCase()}</h1>
      <button type='button' onClick={onButtonClick}>
        {buttonText?.toUpperCase()}
      </button>
    </div>
  );
}

Card.defaultProps = {
  buttonText: 'View Tracks',
};

export default Card;
