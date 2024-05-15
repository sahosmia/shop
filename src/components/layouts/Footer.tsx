import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoYoutube,
  BiRightArrowAlt,
} from "react-icons/bi";
import Logo from "../tools/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary-400 text-white py-16">
      <div className="container grid grid-cols-12 gap-10">
        <div className="col-span-3 md:col-span-4">
          <Logo/>
          <p className="text-sm w-10/12 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eaque voluptate cupiditate quibusdam ex error maiores voluptates,
            porro maxime officia! Atque!
          </p>
          <div className="flex gap-3 ">
            <Link className="text-xl" to="/">
              <BiLogoFacebook />
            </Link>
            <Link className="text-xl" to="/">
              <BiLogoInstagram />
            </Link>
            <Link className="text-xl" to="/">
              <BiLogoLinkedin />
            </Link>
            <Link className="text-xl" to="/">
              <BiLogoPinterest />
            </Link>
            <Link className="text-xl" to="/">
              <BiLogoYoutube />
            </Link>
          </div>
        </div>
        {linkSectionData.map((item) => (
          <div key={item.title} className="col-span-3 md:col-span-2">
            <h6 className="pb-3 uppercase text-sm font-semibold leading-5">
              {item.title}
            </h6>
            <ul>
              {item.links.map((link) => (
                <li
                  key={link.title}
                  className="text-sm mb-2 relative w-fit transition before:absolute before:left-0 before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-500"
                >
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-3 md:col-span-2">
          <h6 className="pb-3 uppercase text-sm font-semibold leading-5">
            News Letter
          </h6>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>{" "}
          <div className="relative">
            <input
              placeholder="Enter your Email"
              type="text"
              className=" text-xs w-full py-3 pr-10 text-black rounded border-none focus:outline outline-slate-700"
            />
            <button className=" absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 flex justify-center items-center rounded bg-black">
              <BiRightArrowAlt />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const linkSectionData = [
  {
    title: "Information",
    links: [
      { title: "contact us", url: "/" },
      { title: "contact us 1", url: "/" },
      { title: "contact us 2", url: "/" },
    ],
  },
  {
    title: "Quick Link",
    links: [
      { title: "contact us", url: "/" },
      { title: "contact us 1", url: "/" },
      { title: "contact us 2", url: "/" },
    ],
  },
  {
    title: "Customer Services",
    links: [
      { title: "contact us", url: "/" },
      { title: "contact us 1", url: "/" },
      { title: "contact us 2", url: "/" },
    ],
  },
];
