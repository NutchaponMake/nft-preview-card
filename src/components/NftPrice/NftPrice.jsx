import classes from "./nft-price.module.css";

export const NftPrice = (props) => {
  return (
    <div className={classes["price-date"]}>
      <p className={classes["eth-price"]}>0.041ETH</p>
      <p className={classes["date-left"]}>3</p>
    </div>
  );
};
