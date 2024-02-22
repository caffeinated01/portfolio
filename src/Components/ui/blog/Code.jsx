import { PrismLight } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ children, language }) {
  return (
    <div className="text-base">
      <PrismLight style={materialDark} language={language}>
        {children}
      </PrismLight>
    </div>
  );
}
export default Code;
