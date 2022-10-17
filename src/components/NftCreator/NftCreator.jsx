import classes from "./nft-creator.module.css";
import creatorImg from "../../assets/image-avatar.png";

export const NftCreator = (props) => {
  return (
    <div className={classes.creator}>
      <img
        src={creatorImg}
        alt="creator image"
        className={classes["creator-img"]}
      />
      <p>
        Creation of <a>Jules Wyvern</a>
      </p>
    </div>
  );
};
