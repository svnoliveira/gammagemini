"use client";

import { adminStore } from "@/stores/AdminStore";

export default function Message() {
  const { message, error } = adminStore();
  const errorMessage =
    typeof error === "object" && error !== null && "message" in error
      ? (error.message as string)
      : "";

  return (
    <>
      {message && (
        <section className="fixed inset-0 flex justify-center items-start text-center z-30 bg-transparent">
          <div className="mt-5 p-5 w-[min(80vw,700px)] rounded-md bg-[#F3F6F1] border-2 border-[#245501] text-[#557b39]">
            {message}
          </div>
        </section>
      )}
      {errorMessage && (
        <section className="fixed inset-0 flex justify-center items-start text-center z-30 bg-transparent">
          <div className="mt-5 p-5 w-[min(80vw,700px)] rounded-md bg-[#ff9292] border-2 border-[var(--dark-red)] text-[var(--red)]">
            {errorMessage}
          </div>
        </section>
      )}
    </>
  );
}
