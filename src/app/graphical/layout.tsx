import SideBar from "./navbar/sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-[#2D4356]">
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
