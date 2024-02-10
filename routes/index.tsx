export default async () => {
  const kv = await Deno.openKv();

  const user = await kv.get(["users", "alejandra_bby123@yahoo.com"]);
  const value = (user.value as any).value;

  return (
    <div>
      Hello world<div>value: {value}</div>
    </div>
  );
};
