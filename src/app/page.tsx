import StatusLabel, {Status} from "@/src/app/components/status-label";
import AddCompanyButton from "@/src/app/components/add-company-button";

export default function Home() {
  return (
      <main>
        <h1 className="text-xl">Home</h1>
          <AddCompanyButton />
      </main>
  );
}
