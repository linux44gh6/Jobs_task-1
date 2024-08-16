import Card from "../../Card/Card";
import useMobile from "../../CustomHooks/useMobile";

const Product = () => {
  const [mobile]=useMobile()
  const mobileData=mobile.data
  console.log(mobileData);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                mobileData?.map((mobile,indx)=><Card
                key={indx}
                mobile={mobile}
                ></Card>)
            }
            </div>
        </div>
    );
};

export default Product;