import Link from "next/link";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://banner2.cleanpng.com/20180328/lvw/kisspng-medium-logo-publishing-blog-i-5abb6adcaa7024.4856922615222320286981.jpg"
        />
      </Head>

      <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              src="https://cutewallpaper.org/24/medium-logo-png/medium-49148-logo-f459e-usage-4368e-guidelines-5a30e-by-de2f4-medium-8ffdd-mediumdesign.png"
              alt="logo"
              className="w-44 object-contain cursor-pointer"
            />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
            <h3 className="cursor-pointer">About</h3>
            <h3>Contact</h3>
            <h3
              className="
          text-white 
          bg-green-600 
          hover:bg-green-800  
          px-4 py-1 
          rounded-full 
          transition-all 
          duration-200 
          cursor-pointer"
            >
              Follow
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600 ">
          <h3 className="hover:text-green-800 cursor-pointer transition-all duration-200">
            Sign in
          </h3>
          <h3
            className="
        border px-4 py-1 
        rounded-full 
        border-green-600 
        hover:text-green-800 
        hover:border-green-800 
        cursor-pointer transition-all duration-200"
          >
            Get Started
          </h3>
        </div>
      </header>
    </>
  );
};

export default Header;
