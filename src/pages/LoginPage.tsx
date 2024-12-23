import LoginMenu from "../components/LoginMenu";
import LoginSidebar from "../components/LoginSidebar";

export default function Login() {
  return (
    <div className="h-screen grid grid-cols-2 max-lg:grid-cols-1">
      <LoginSidebar />
      <LoginMenu />
    </div>
  );
}
