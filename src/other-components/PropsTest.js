import React from "react";

// const PropsTest = (blog) => this blog paramter returns an object. It contains the arguments given in the key vlaue pair
// in this case it is blog={company:"GrowthMints", title:"A React Development Company"}
// insted of (blogs) you can give any name such as (props)
// How this binding happens? The arguments provided in the App/js as <PropsTest company="GrowthMints" title="A React Development Company"/> will directly come into the blog object

const PropsTest = (blog) => {
  console.log("Blog Object", blog);

  return (
    <div>
      <h6>Company Name:{blog.company}</h6>
      <h6>Description:{blog.title}</h6>
    </div>
  );
};
export default PropsTest;

// instead of using a complete (blog), we can destructure it so that we dont have to use blog.name or blog.title
// You can do it by destructuring in following way: const PropsTest = ({company,title}) =>
// Then use only 
//<h6>Company Name:{company}</h6>
//<h6>Description:{title}</h6>
