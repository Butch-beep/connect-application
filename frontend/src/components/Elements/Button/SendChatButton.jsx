import Button from "./Button";

function SendChatButton({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default SendChatButton;
