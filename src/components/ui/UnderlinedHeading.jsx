export default function UnderlinedHeading({
  heading,
  color,
  marginLeft,
  marginTop,
  imageSize,
  rotate,
  children,
}) {
  const HeadingTag = heading;

  return (
    <span className="underline-wrapper" style={{ transform: rotate }}>
      <HeadingTag>{children}</HeadingTag>
      <img
        src={`/Images/${color}.svg`}
        alt=""
        className="underline"
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
          width: imageSize,
        }}
      />
    </span>
  );
}
