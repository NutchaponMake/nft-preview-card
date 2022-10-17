import classes from "./nft-image.module.css";
import nftImage from "../../assets/image-equilibrium.jpg";
import viewIcon from "../../assets/icon-view.svg";

export const NftImage = (props) => {
  return (
    <div className={classes.container}>
      <img
        src={nftImage}
        alt="equilibrium NFT"
        className={classes["nft-img"]}
      />
      <a href="#" className={classes.overlay} title="view nft image">
        <img src={viewIcon} className={classes.icon} />
      </a>
    </div>
  );
};
