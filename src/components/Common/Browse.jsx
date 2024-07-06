import Header from "./Header";
import useRecentMoviesList from "../../helpers/useRecentMoviesList";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useRecentMoviesList();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
