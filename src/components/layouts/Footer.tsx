import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-400 text-white py-20">
      <div className="container grid grid-cols-4 gap-10">
        <div className="col-span-4 md:col-span-2">
          <Link to="/">Logo</Link>                                                      
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eaque voluptate cupiditate quibusdam ex error maiores tenetur est
            sit vel temporibus necessitatibus amet nam minima, voluptates, porro
            maxime officia! Atque!
          </p>
        </div>

        <div className="col-span-4 md:col-auto">
          <h6>Important Link</h6>
          <ul>
            <li><Link to="/">Text 1</Link></li>
            <li><Link to="/">Text 2</Link></li>
            <li><Link to="/">Text 3</Link></li>
            <li><Link to="/">Text 4</Link></li>
            <li><Link to="/">Text 5</Link></li>
          </ul>
        </div>

        <div className="col-span-4 md:col-auto">
          <h6>Important Link</h6>
          <ul>
            <li><Link to="/">Text 1</Link></li>
            <li><Link to="/">Text 2</Link></li>
            <li><Link to="/">Text 3</Link></li>
            <li><Link to="/">Text 4</Link></li>
            <li><Link to="/">Text 5</Link></li>
          </ul>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
