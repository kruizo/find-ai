import { NavLink, Outlet } from "react-router-dom";

function Abouts() {
  const about = [1, 2, 3, 4];

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        {about.map((abouts) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            key={abouts}
            to={`${abouts}`}
          >
            About {abouts}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Abouts;
