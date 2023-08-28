import Image from 'next/image';

export default function authLayout({ children }) {
  return (
    <div className="h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="h-full flex justify-center items-center bg-black/60">
        <nav className="text-white fixed top-0 left-0 p-5 ">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="w-40 lg:w-60"
            width={250}
            height={250}
          />
          <h1>Hello world</h1>
        </nav>
        {children}
      </div>
    </div>
  );
}
