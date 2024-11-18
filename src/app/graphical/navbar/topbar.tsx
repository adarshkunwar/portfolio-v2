import Link from "next/link";
import { links } from "./links";
const Topbar = () => {
  return (
    <div className="mx-auto flex w-fit items-center justify-center gap-5 rounded-xl border border-white bg-gray-900 px-8 py-5">
      {links.map((link, _) => {
        return (
          <li key={_} className="relative table-cell">
            <Link
              href={link.url}
              className="relative inline-block text-lg font-semibold text-white no-underline after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-150 after:ease-linear hover:text-gray-300 hover:after:left-0 hover:after:w-full"
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Topbar;
