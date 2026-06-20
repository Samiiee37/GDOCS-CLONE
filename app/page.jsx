import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p>Hello</p>
      <Button>press <Link href="/documents/123">me</Link></Button>
    </div>
  );
};

export default Home;
