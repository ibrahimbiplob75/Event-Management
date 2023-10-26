import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories , setcategories]=useState([]);

    

    useEffect(()=>{
        fetch("categories.json")
        .then(res=> res.json())
        .then(data =>setcategories(data))
        
    },[])
    return (
      <div>
        <h2 className="text-2xl font-Poppins font-bold">All Category</h2>
        {categories.map((category) => (
          <Link
            activeClassName="active-category-link"
            className="category-link block mt-6 ml-4"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    );
};

export default LeftSideNav;