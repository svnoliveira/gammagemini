"use client";

import { IContact } from "@/stores/@contactTypes";
import { IUser } from "@/stores/@userTypes";
import { userStore } from "@/stores/UserStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { contactStore } from "@/stores/ContactStore";

export const Dashboard = ({
  users,
  contacts,
}: {
  users: IUser[];
  contacts: IContact[];
}) => {
  const { setUserList, userData, loadUser, logout } = userStore();
  const { setContactList, contactList } = contactStore();

  useEffect(() => {
    setUserList(users);
    setContactList(contacts);
    if (!userData.user) {
      loadUser();
    }
    if (!userData.user || !userData?.user?.is_superuser) {
      redirect("/admin");
    }
  }, [users, setUserList, userData, loadUser, contacts, setContactList]);

  return (
    <section>
      <Table>
        <TableCaption>A list of contacts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>telefone</TableHead>
            <TableHead className="text-right">Mensagem</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contactList.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium">{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell className="text-right">{contact.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{contactList.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Button onClick={() => logout()}>Deslogar</Button>
    </section>
  );
};
