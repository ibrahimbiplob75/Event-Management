import { useLoaderData } from "react-router-dom";
import Header from "./Shared/Header/Header";
import GoogleMapReact from "google-map-react";
import ContentCard from "./ContentCard/ContentCard";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Home = () => {

    const defaultProps = {
      center: {
        lat: 23.777176,
        lng: 90.399452,
      },
      zoom: 11,
    };
  const Datas=useLoaderData();
 
    return (
      <div>
        <Header></Header>

        <div className=" m-10">
          <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Datas.map((Data) => (
              <ContentCard key={Data.id} Data={Data}></ContentCard>
            ))}
          </div>
        </div>

        <div style={{ height: "500px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={23.777176}
              lng={90.399452}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
};

export default Home;