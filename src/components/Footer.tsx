const Footer = () => {
  return (
    <footer className="w-full place-items-center justify-center bg-green-700/15 p-6">
      <p className="text-center">
        {new Date().getFullYear()} &copy; by EJ Joinery Services Ltd{" "}
      </p>
    </footer>
  );
};

export default Footer;
