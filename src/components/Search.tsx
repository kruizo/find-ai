function Search() {
  return (
    <div className="relative flex">
      <input
        type="search"
        className="w-full text-slate-300 hover:drop-shadow-md hover:shadow-blue-400 border-neutral-700 caret-blue-500 h-20 rounded-full transition-all bg-[#16181D] text-3xl text-center px-5 "
        name="search"
        autoFocus
        id=""
      />
      <div className="absolute right-1 top-2">
        <button
          type="submit"
          className="bg-slate-100 px-4 py-4 rounded-full flex gap-4 text-lg text-black items-center"
        >
          {/* <p>Search</p> */}
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
