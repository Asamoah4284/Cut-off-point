import Avatar from "@mui/material/Avatar";

export default function Header() {
  return (
    <header className="flex justify-between p-4 ">
      <h2 className="text-2xl">Overview</h2>
      <div className="flex gap-4 items-center">
        <h3 className="text-xl">Hello Kojo</h3>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </header>
  );
}
