import { Navigation } from "../components/navigation";
import { Protected } from "../components/protected";

export default function ProtectedPage() {
  return (
    <>
      <Protected />
      <Navigation />
    </>
  );
}
