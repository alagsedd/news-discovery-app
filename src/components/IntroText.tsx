import styles from "../styles/IntroText.module.css";

const IntroText = () => {
  return (
    <>
      <h1 className={styles.motherHeading}>
        <span className={styles.heading}>A News🔥</span>
      </h1>
      <p className={styles.intro}>
        A News is your gateway to well-informed insights. Our commitment is to
        deliver concise, relevant news, keeping you ahead of the curve. Discover
        the latest developments, expert analyses, and comprehensive coverage.
        Stay informed with "A News."{" "}
      </p>
    </>
  );
};

export default IntroText;
