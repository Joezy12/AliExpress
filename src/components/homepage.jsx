
import HomeLeft from "./homeLeft";
import HomeCenter from "./homeCenter";
import HomeRight from "./homeRight";

function Homepage() {
    return (
        <div className="homepage">
          <HomeLeft />
          <HomeCenter />
          <HomeRight />
        </div>
    )
}

export default Homepage;