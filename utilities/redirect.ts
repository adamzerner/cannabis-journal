export const redirect = (
  to: string,
  headers?: Headers,
  status = 303,
) => {
  headers = headers || new Headers();
  headers.set("location", to);

  return new Response(null, {
    status,
    headers,
  });
};
