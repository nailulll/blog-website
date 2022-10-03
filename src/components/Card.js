import { Link } from "react-router-dom";

const Card = ({ props }) => {
  return (
    <div className="card w-[350px] h-[264px] shadow-xl image-full">
      <figure>
        <img src={props.imageUrl} alt={props.newsSite} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions justify-start bottom-10 right-0">
          <button className="px-10 py-2 bg-white backdrop-blur-sm bg-opacity-10">
            <Link to={`/blog/${props.id}`} className="text-white opacity-100">
              Baca
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
