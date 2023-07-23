import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen place-items-center grid">
      <SignIn />
    </div>
  );
}
