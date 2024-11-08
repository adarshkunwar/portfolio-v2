import ComputerCard from "@/pageComponent/ComputerCard";
import TerminalCard from "@/pageComponent/terminalCard";

const Starter: React.FC = () => {
  return (
    <div className="flex bg-white h-screen w-screen items-center justify-center gap-2">
      <ComputerCard />
      <TerminalCard />
    </div>
  );
};

export default Starter;
