import Leaderboard from "@/components/Leaderboard";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <Title/>
      <Leaderboard/>
    </div>
  );
}
