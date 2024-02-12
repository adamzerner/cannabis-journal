// deno-lint-ignore-file no-explicit-any
import { Card, CardBody, Flex } from "rfui";
import { useState } from "preact/hooks";

export const Record = ({ record }: { record: any }) => {
  const [areDetailsVisible, setAreDetailsVisible] = useState(false);
  const toggleAreDetailsVisible = () => {
    setAreDetailsVisible((v) => !v);
  };

  return (
    <Card class="font-mono">
      <CardBody>
        <Flex class="flex gap-2">
          <div>{record.key.join(" : ")}</div>
          <div class="cursor-pointer" onClick={toggleAreDetailsVisible}>
            {areDetailsVisible ? "[-]" : "[+]"}
          </div>
        </Flex>
        {areDetailsVisible &&
          (
            <pre class="mt-2 p-6 bg-neutral-100 ">
            {JSON.stringify(record, null, 2)}
            </pre>
          )}
      </CardBody>
    </Card>
  );
};
