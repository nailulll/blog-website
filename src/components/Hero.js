import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = ({ props }) => {
  return (
    <div className="hero py-32">
      <div className="hero-content flex-col lg:flex-row gap-x-10">
        <img src={props.img} alt="hero" />
        <div>
          <h1 className="text-5xl font-bold">{props.title}</h1>
          <p className="py-12">{props.content}</p>
          {props.id === 1 ? (
            <Link to="/blog">
              <Button>Lihat Berita</Button>
            </Link>
          ) : (
            <div className="flex flex-wrap items-center gap-5">
              {props.icon.map((icon) => {
                return (
                  <div className="flex items-center gap-x-1" key={icon.url}>
                    <img src={icon.icon} alt="icon" />
                    <a href={icon.url}>{icon.name}</a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
