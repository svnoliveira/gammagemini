import { LoginForm } from "@/components/LoginForm";
import { Container } from "@/components/ui/fragments/Container";
import { retrieve } from "@/lib/fetchClient";
import { IUser } from "@/stores/@userTypes";

export default async function AdminPage() {
  const users = ((await retrieve("/users/")) as IUser[]) || [];

  return (
    <Container component="main">
      <div className="h-[90dvh] max-w-[28rem] mx-auto mt-[20dvh]">
        <LoginForm users={users} />
      </div>
    </Container>
  );
}
