import Image from "next/image";
import icon from './icon_in_app.png';

export default function Home() {
  return (
    <>
      hello world
      <Image src="/icon_in_public.png" alt="just an ordinary icon" width={100} height={100} />
      <Image src={icon} alt="just an ordinary icon" />
    </>
  );
}
