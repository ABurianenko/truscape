import ActiveLabel from "@/src/app/components/active-label";
import NotActiveLabel from "@/src/app/components/not-active-label";

export default function Home() {
  return (
      <main>
        <h1>Home</h1>
          <ActiveLabel>Active</ActiveLabel>
          <NotActiveLabel>Not Active</NotActiveLabel>
      </main>
  );
}
