export default function CustomBtn(props) {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`customBtn ${props.className}`}
      >
        {props.title}
      </button>
    </>
  );
}
