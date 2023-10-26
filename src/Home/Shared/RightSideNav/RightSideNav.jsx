import { FaGoogle, FaGithub, FaFacebook,  FaTwitter, FaInstagram } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-Poppins font-bold">LogIn With</h2>

        <button className="btn btn-outline btn-primary w-full mt-4">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline btn-secondary w-full mt-4">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-Poppins mt-12 mb-5">Find Us On</h1>
        <button className="btn btn-outline btn-info w-full flex space-y-4 ">
          <FaFacebook></FaFacebook>
          Facebook
        </button>
        <button className="btn btn-outline btn-success w-full flex space-y-4 mt-2">
          <FaTwitter></FaTwitter>
          Twitter
        </button>
        <button className="btn btn-outline btn-warning w-full flex space-y-4 mt-2">
          <FaInstagram></FaInstagram>
          Instragram
        </button>
      </div>

     
    </div>
  );
};

export default RightSideNav;
