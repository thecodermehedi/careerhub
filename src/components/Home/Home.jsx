import Banner from "../Banner/Banner";
import CatList from "../CatList/CatList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 px-5 md:px-10 lg:px-20">
      <Banner />
      <CatList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
