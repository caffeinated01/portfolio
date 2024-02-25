import { Light } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

function Code({ children, language }) {
  return (
    <div className="text-base">
      <Light style={atomOneDark} language={language}>
        {children}
      </Light>
    </div>
  );
}
export default Code;
