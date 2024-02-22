function Image({ src, alt }) {
  return (
    <div className="py-2">
      <img
        src={src}
        alt={alt}
        className="rounded-md shadow-lg max-h-[400px]"
      ></img>
    </div>
  );
}
export default Image;
