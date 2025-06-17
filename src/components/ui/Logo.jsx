export default function Logo({ isDesktop }) {
  return (
    <a href="/">
      <img
        src="/Images/logo.png"
        alt="logo"
        style={{ width: isDesktop ? "200px" : "140px" }}
      />
    </a>
  );
}
