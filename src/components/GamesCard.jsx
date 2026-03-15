import Image from "next/image";
import Link from "next/link";

export default function GamesCard({ image, games, title, id, backgroundColor }) {

  return (
 

<Link
  href={`/game/${id}`}
  style={{ backgroundColor: `#${backgroundColor}` }}
  className="w-full h-40 "
>
<Image
  src={image}
  width={300}
  height={200}
  className="w-full h-auto"
  alt={title}
/>
  <div className="   text-center">
    <h3 className="text-lg font-bold text-white  ">{title}</h3>
  </div>

</Link>
  );
}
