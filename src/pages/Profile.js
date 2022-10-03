import Hero from "../components/Hero";

const Profile = () => {
  const data = {
    id: 2,
    img: "/img/hero.png",
    title: "Profil Singkat",
    content:
      "Saya adalah Nailul Ngafwa seorang programmer pemula yang baru saja terjun ke industri programmer. Itu saja mengenai diri saya, anda dapat menghubungi saya melalui sosial media.",
    icon: [
      {
        url: "https://www.facebook.com/unkown.unkown.39589149",
        icon: "/icon/facebook.svg",
        name: "Facebook",
      },
      {
        url: "https://www.instagram.com/_justalfa/",
        icon: "/icon/instagram.svg",
        name: "Instagram",
      },
      {
        url: "https://twitter.com/_justalfa/",
        icon: "/icon/twitter.svg",
        name: "Twitter",
      },
    ],
  };
  return (
    <>
      <Hero props={data} />
    </>
  );
};
export default Profile;
