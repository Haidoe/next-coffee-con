import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <Link href={props.href} style={styles.cardLink}>
      <div className={styles.container}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{props.storeName}</h2>
        </div>

        <div className={styles.cardImageWrapper}>
          <Image
            src={props.imgUrl}
            width={250}
            height={150}
            alt="Coffee Image"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
