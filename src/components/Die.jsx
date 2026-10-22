export default function Die(props){
  return(
    <button className={props.isHeld ? "held" : undefined} onClick={() => {props.holdDie(props.id)}}>{props.value}</button>
  );
}