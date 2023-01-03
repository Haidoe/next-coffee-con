import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <h2>{props.storeName}</h2>
      <Image src={props.imgUrl} width={250} height={150} alt="Coffee Image" />
    </Link>
  );
};

export default Card;
