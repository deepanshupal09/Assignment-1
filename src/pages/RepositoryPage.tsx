import RepositoryTable from "../components/RepositoryTable";
import Sidebar from "../components/Sidebar";

export default function RepositoryPage() {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-[240px] max-lg:mt-[57px] lg:p-6">
        <RepositoryTable />
      </div>
    </div>
  );
}
