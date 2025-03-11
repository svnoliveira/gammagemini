import { Dashboard } from "@/components/Dashboard";
import { Container } from "@/components/ui/fragments/Container";
import { retrieve } from "@/lib/fetchClient";
import { IContact } from "@/stores/@contactTypes";
import { IUser } from "@/stores/@userTypes";

export default async function AdminDashboardPage() {
  const users = ((await retrieve("/users/")) as IUser[]) || [];
  const contacts = ((await retrieve("/contacts/")) as IContact[]) || [];

  return (
    <Container component="main">
      <div className="h-[90dvh] max-w-[28rem] mx-auto mt-[20dvh]">
        <Dashboard users={users} contacts={contacts} />
      </div>
    </Container>
  );
}
