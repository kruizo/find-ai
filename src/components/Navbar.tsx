function Navbar() {
  return (
    <div className="max-w-screen-2xl flex justify-center">
      <div className="flex gap-10 justify-between rounded-b-full mx-10 py-5 px-10 text-slate-800 bg-slate-200 text">
        <ul>
          <a>Home</a>
        </ul>
        <ul>
          <a>About</a>
        </ul>
        <ul>
          <a>Contact Us</a>
        </ul>
        <ul>
          <a>How to use</a>
        </ul>
        <ul>
          <a>FAQ</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
