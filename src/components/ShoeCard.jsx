const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  return (
    <div>
      <div>
        <img
          src={imgURL.thumbnail}
          alt="shoe tumbnail"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
