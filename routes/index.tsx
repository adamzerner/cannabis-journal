export default async () => {
  const kv = await Deno.openKv();

  const user = await kv.get(["users", "alejandra_bby123@yahoo.com"]);
  // @ts-expect-error expected
  const value = user?.value?.value || "";

  return (
    <div>
      Hello world<div>value: {value}</div>
    </div>
  );
};
