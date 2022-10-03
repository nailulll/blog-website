import { useEffect, useState } from "react";
import Card from "../components/Card";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const req = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const res = await req.json();
      setBlog(res);
      setLoading(false);
    };
    getBlogs();
  }, []);

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
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 place-items-center py-32 gap-7">
        {blog.map((res) => {
          return <Card props={res} key={res.id} />;
        })}
      </div>
    </>
  );
};
export default Blog;
