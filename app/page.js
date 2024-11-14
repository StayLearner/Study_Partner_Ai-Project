import Image from "next/image";
import { Button } from "@/components/ui/button";
export const metadata = {
  title: 'Your Page Title',
  description: 'Your Page Description',
};
export default function Home() {
  return (
      <div>
      <h2> Hello this is my new project </h2>
      {/* <Button variant="outline"> Click Me </Button> */}
      <Button> Click </Button>
    </div>
  );
}
