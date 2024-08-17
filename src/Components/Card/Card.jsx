

const Card = ({mobile}) => {
    const {id,productImage,productName}=mobile
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img className="w-[200px] h-[200px]"
      src={productImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;