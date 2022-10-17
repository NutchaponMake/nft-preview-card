import classes from "./nft-description.module.css";

export const NftDescription = (props) => {
  return (
    <div className={classes.description}>
      <a href="#">
        <h2>Equilibrium #3429</h2>
      </a>
      <p>Our Equilibrium collection promotes balance and calm.</p>
    </div>
  );
};
