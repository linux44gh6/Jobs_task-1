

const Card = ({mobile}) => {
    const {id,productImage,productName,description,price}=mobile
    return (
        <div>
            <div className="card card-compact bg-base-100 h-[400px]  shadow-xl">
  <figure>
    <img className="w-[200px] h-[200px]"
      src={productImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex items-center justify-between">
    <h2 className="card-title">{productName}</h2>
    <h2 className="card-title">{price}$</h2>
    </div>
    <p className="text-gray-500 font-semibold">{description}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-600 text-white hover:bg-blue-600">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;