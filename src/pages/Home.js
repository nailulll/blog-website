import Hero from "../components/Hero";

const Home = () => {
  const data = {
    id: 1,
    img: "/img/hero.png",
    title: "Blog Berita Sederhana",
    content:
      "Sebuah blog berita yang datanya diambil dari API terbuka di Internet. Anda dapat mengcek beritanya dibawah ini. Dibuat dengan React JS dan style dengan Tailwind CSS",
  };
  return (
    <>
      <Hero props={data} />
    </>
  );
};
export default Home;
