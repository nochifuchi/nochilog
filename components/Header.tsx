import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const titleLink = (
    <Link href="/" className="">
      <Image src="/logo.svg" alt="NOCHI LOG" width={179} height={48} quality={30} />
    </Link>
  );

  return (
    <header className="flex items-center max-w-screen-md h-20 mx-auto px-4">
      {router.pathname === '/' ? <h1>{titleLink}</h1> : <>{titleLink}</>}
    </header>
  );
};

export default Header;
