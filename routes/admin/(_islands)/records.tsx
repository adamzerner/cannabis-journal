// deno-lint-ignore-file no-explicit-any
import { useState } from "preact/hooks";
import { Record } from "./record.tsx";
import { FormField, Stack } from "rfui";

export const Records = ({ records }: { records: any[] }) => {
  const [keySearchQuery, setKeySearchQuery] = useState("");
  const filteredRecords = records.filter((r) =>
    r.key.join(" : ").startsWith(keySearchQuery)
  );

  return (
    <div>
      <FormField
        label="Filter by key"
        type="text"
        value={keySearchQuery}
        onInput={(e) => {
          setKeySearchQuery((e.target as HTMLInputElement).value || "");
        }}
        helperText='For `["users", "foo@bar.com"]` type "users : foo@bar.com"'
        class="mb-6"
      />
      <Stack class="gap-3">
        {filteredRecords.map((record) => <Record record={record} />)}
      </Stack>
    </div>
  );
};
