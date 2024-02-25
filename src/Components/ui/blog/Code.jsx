import Prism from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

function Code({ children, language }) {
  return (
    <div className="text-base">
      <Prism style={atomOneDark} language={language}>
        {children}
      </Prism>
    </div>
  );
}
export default Code;
