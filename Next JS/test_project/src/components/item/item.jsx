import styles from "./item.module.css";

export default function Item({ description, image }) {
  return (
    <div>
      <h1 className={styles.h1}>Item List</h1>

      <img src={image} />
      <p className={styles.p}>  {description}</p>
      <p>$30</p>
    </div>
  );
}
