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
    <header className="flex items-center h-20 mb-1 md:mb-5 mx-2 max-w-screen-lg lg:mx-auto">
      {router.pathname === '/' ? <h1>{titleLink}</h1> : <>{titleLink}</>}
    </header>
  );
};

export default Header;
