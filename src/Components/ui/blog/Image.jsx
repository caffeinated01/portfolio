function Image({ src, alt }) {
  return (
    <div className="py-2 flex justify-center">
      <img src={src} alt={alt} className="rounded-md shadow-lg w-full"></img>
    </div>
  );
}
export default Image;
