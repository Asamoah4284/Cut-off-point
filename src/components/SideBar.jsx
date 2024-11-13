import HomeIcon from "@mui/icons-material/Home";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssistantIcon from "@mui/icons-material/Assistant";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { Link } from "react-router-dom";
export default function SideBar() {
  const menuItems = [
    { name: "OverView", icon: <HomeIcon />, id: "overview" },
    {
      name: <Link to="/dashboard/start">Start Application</Link>,
      icon: <EditCalendarIcon />,
      id: "start-application",
    },
    { name: "Check Status", icon: <CheckCircleIcon />, id: "check-status" },
    { name: "Recommendation", icon: <AssistantIcon />, id: "recommendation" },
    { name: "Update Info", icon: <InfoOutlinedIcon />, id: "update-info" },
    { name: "Performance", icon: <BarChartOutlinedIcon />, id: "performance" },
  ];
  return (
    <aside className="h-screen bg-[#F6F6F6] w-64 flex flex-col p-4">
      <div className="text-2xl font-bold p-6 mb-10">
        <h1>Logo</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="p-2 flex gap-2 w-full items-center mb-2 hover:text-blue-500"
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
