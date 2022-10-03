import { Link } from "react-router-dom";
import Container from "./Container";

const NavBar = () => {
  const list = [
    {
      judul: "Beranda",
      link: "/",
    },
    {
      judul: "Profile",
      link: "/profile",
    },
    {
      judul: "Blog",
      link: "/blog",
    },
  ];
  return (
    <Container px="px-0">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow glass bg-primary/40 rounded-sm w-52"
            >
              {list.map((res) => {
                return (
                  <li key={res.link}>
                    <Link to={res.link} className="font-semibold">
                      {res.judul}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-10 h-10 bg-neutral/20 flex justify-center items-center">
            A
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {list.map((res) => {
              return (
                <li key={res.link}>
                  <Link to={res.link} className="font-semibold text-base">
                    {res.judul}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/profile" className="text-base font-medium">
            Ikuti
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default NavBar;
