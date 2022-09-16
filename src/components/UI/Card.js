import "./Card.css";

const Card = (props) => {
  // 꼭 "card " 뒤에 공백이 있어야함
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
