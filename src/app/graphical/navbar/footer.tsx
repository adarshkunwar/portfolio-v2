import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="m-10 flex flex-col justify-center space-y-10">
      <nav className="flex flex-wrap justify-center gap-6 font-medium text-gray-500">
        <Link className="hover:text-gray-900" href="#">
          Home
        </Link>
        <Link className="hover:text-gray-900" href="#">
          About
        </Link>
        <Link className="hover:text-gray-900" href="#">
          Services
        </Link>
        <Link className="hover:text-gray-900" href="#">
          Media
        </Link>
        <Link className="hover:text-gray-900" href="#">
          Gallery
        </Link>
        <Link className="hover:text-gray-900" href="#">
          Contact
        </Link>
      </nav>

      <div className="flex items-center justify-center space-x-5">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            width={40}
            height={40}
            alt="facebook"
          />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            width={40}
            height={40}
            alt="linkedin"
          />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            width={40}
            height={40}
            alt="instagram"
          />
        </Link>
        <p className="text-center font-medium text-gray-700">
          &copy; 2022 <b>Adarsh Kunwar</b>. All rights reservered.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
