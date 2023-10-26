import { useLoaderData, useParams } from "react-router-dom";




const SingleContent = () => {
  const details = useLoaderData();
    const {id}=useParams();
    const detail = details.find((detail) => detail.id == id);

    const generateStarRating = (ratingValue) => {
      const stars = [];
      for (let i = 1; i <= ratingValue; i++) {
        stars.push(
          <input
            type="radio"
            key={i}
            className="mask mask-star-2 bg-orange-400"
          />
        );
      }
      return stars;
    };

    return (
      <div>
        <div className=" m-10">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={detail.image}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{detail.title}</h1>
                <h2 className="text-2xl font-bold mt-5">
                  {" "}
                  Total Participate : {detail.number_of_participants}
                </h2>
                <h2 className="text-2xl font-bold mt-5">
                  Total Review :{detail.number_of_reviews}
                </h2>
                <div className="rating mt-5">
                  {generateStarRating(detail.rating)}
                  <p className="ml-3">{detail.rating}</p>
                </div>
                <p className="py-6">{detail.details}</p>
                <button className="btn btn-primary">Enroll Now !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleContent;