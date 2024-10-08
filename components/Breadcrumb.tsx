import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const router = useRouter();
  let joinedPath = '';

  return (
    <>
      {router.asPath.split('/').map((path, index) => {
        if (path) {
          joinedPath += path + '/';
          return (
            <Link key={index} href={`/${joinedPath}`} className="text-gray-500 hover:text-gray-600">
              <span className="mx-2 text-gray-500">/</span> {path}
            </Link>
          );
        }
      })}
    </>
  );
};

export default Breadcrumb;
