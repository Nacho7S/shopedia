import Navbar from "@/components/dashboard/Navbar";
import DashboardUi from "@/components/dashboard/DashboardUi";

export default function Dashboard() {
  return (
    <div className="flex flex-col overflow-hidden scroll-smooth" style={{ background: "url('/background.jpg')" }}>
      <div className="flex justify-center items-center p-3">
        <Navbar />
      </div>
      <DashboardUi />
    </div>
  );
}
