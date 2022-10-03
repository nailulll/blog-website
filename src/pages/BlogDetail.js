import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const id = useParams();

  useEffect(() => {
    const detail = async () => {
      const req = await fetch(
        `https://api.spaceflightnewsapi.net/v3/blogs/${id.id}`
      );
      const res = await req.json();
      setBlog(res);
      setLoading(false);
    };
    detail();
  }, [id]);

  return (
    <>
      {loading && (
        <div className="py-56">
          <span className="flex items-center justify-center gap-2">
            <div className="h-5 w-5 bg-transparent border-r-2 border-t-2 border-b-1 border-white rounded-full animate-spin"></div>
            <div className="font-semibold text-xl">Loading</div>
          </span>
        </div>
      )}
      <div className="mx-auto lg:px-52 pt-24 pb-52">
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <p className="text-base font-base py-5">
          {blog.publishedAt}{" "}
          <span className="font-semibold">{blog.newsSite}</span>
        </p>
        <img
          src={blog.imageUrl}
          alt={blog.newsSite}
          className="w-full h-[425px] object-cover rounded-lg shadow-lg"
        />
        <p className="text-base pt-7">{blog.summary}</p>
        <Link className="text-base pt-7 block">Baca selengkapnya disini</Link>
      </div>
    </>
  );
};
export default BlogDetail;
