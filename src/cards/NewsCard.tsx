import styles from "../styles/NewsCard.module.css";

interface Props {
  image: string;
  title: string;
  publishedAT: string;
  //   content: string;
}
const NewsCard = ({ image, publishedAT, title }: Props) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>{" "}
      <span className={styles.postTime}>post time: {publishedAT}</span>
      {/* <p>{content}</p> */}
      <img
        src={image}
        alt="Your browser doesn't support this image"
        className={styles.image}
      />
    </div>
  );
};

export default NewsCard;
