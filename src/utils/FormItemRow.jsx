export default function FormItemRow({ text, content }) {
  return (
    <div className="formItemRow">
      <h4>{text}</h4>
      <h4>{content}</h4>
    </div>
  );
}
