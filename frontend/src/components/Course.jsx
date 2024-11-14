import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  // console.log(list);
  return (
    <>
    <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 ">
      <div className="mt-28  items-center  justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We are happy you are <span className="text-pink-500">Here!</span> :
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          possimus quas minus itaque nihil officia ex quibusdam officiis, alias
          reprehenderit ab unde, recusandae nisi blanditiis ipsa. Assumenda
          explicabo magnam at, veritatis nemo voluptate odio debitis totam
          minima! Ea, tempore animi eaque voluptatibus adipisci natus ducimus id
          libero pariatur placeat repellendus. Nisi quaerat nam iste quos a
          nulla consectetur, corrupti quis dolorem
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {list.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Course;
