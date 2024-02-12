import { kv } from "@/services/db/index.ts";
import { Records } from "./(_islands)/records.tsx";
import { H1 } from "rfui";

export default async () => {
  const recordsIterator = kv.list({ prefix: [] });
  const records = [];

  for await (const record of recordsIterator) {
    records.push(record);
  }

  return (
    <main>
      <H1>Admin</H1>
      <Records records={records} />
    </main>
  );
};
