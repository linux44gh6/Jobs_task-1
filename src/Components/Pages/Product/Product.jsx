import useMobile from "../../CustomHooks/useMobile";

const Product = () => {
  const [mobile]=useMobile()
  const mobileData=mobile.data
  console.log(mobileData);
    return (
        <div>
            <h1>this is the </h1>
        </div>
    );
};

export default Product;