export const redirect = (to: string, headers?: Headers) => {
  headers = headers || new Headers();
  headers.set("location", to);

  return new Response(null, {
    status: 303,
    headers,
  });
};
