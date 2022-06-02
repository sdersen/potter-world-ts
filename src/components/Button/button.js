import "./button.scss";

function Button({ text, href }) {
  return (
    <div className="button">
      <a href={href} as="a">{text}</a>
    </div>
  );
}

export default Button;
