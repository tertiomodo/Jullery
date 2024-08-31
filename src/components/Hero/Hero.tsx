import styles from "./style.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.background}></div>
        <div className={styles.text}>
          <h1 className={styles.title}>
            It’s my photo <span className="highlight">gallery</span>
          </h1>
          <p className={styles.subtitle}>
            Photography is a way to see the beauty in the ordinary things and capture it forever.
          </p>
        </div>
      </div>
    </div>
  );
}
