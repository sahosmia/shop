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

function FooterTitle({ title }: { title: string }) {
  return (
    <h6 className="pb-3 uppercase text-lg text-ass font-semibold leading-5">
      {title}
    </h6>
  );
}

const Footer = () => {
  return (
    <footer className="bg-primary-400  py-16">
      {/* <div className="container grid grid-cols-12  gap-10"> */}
      <div className="container">
        <div className="grid grid-cols-12  gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Logo />
            <p className="w-10/12 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur eaque voluptate cupiditate quibusdam ex error maiores
              voluptates, porro maxime officia! Atque!
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
            <div key={item.title} className="col-span-12 sm:col-span-6 lg:col-span-2">
              <FooterTitle title={item.title} />

              <ul>
                {item.links.map((link) => (
                  <li
                    key={link.title}
                    className=" mb-2 relative w-fit transition before:absolute before:left-0 before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-ass before:transition-all before:duration-500"
                  >
                    <Link to={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <FooterTitle title="News Letter" />
            <p className=" mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>{" "}
            <div className="relative">
              <input
                placeholder="Enter your Email"
                type="text"
                className=" text-sm w-full py-3 pr-10 text-ass bg-gray-100 ring-0  focus:ring-1 transition-all focus:ring-secondary2 rounded border-none focus:outline-0   "
              />
              <button className=" absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 flex justify-center items-center rounded bg-secondary2 text-primary2">
                <BiRightArrowAlt />
              </button>
            </div>
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
];
