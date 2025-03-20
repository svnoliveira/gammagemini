import { LoginForm } from "@/components/LoginForm";
import { Container } from "@/components/ui/fragments/Container";

export default async function AdminPage() {
  return (
    <Container component="main">
      <div className="h-[90dvh] max-w-[28rem] mx-auto mt-[20dvh]">
        <LoginForm />
      </div>
    </Container>
  );
}
