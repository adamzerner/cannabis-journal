import { encodeHex } from "https://deno.land/std@0.202.0/encoding/hex.ts";

export const getHashedValue = async (s: string) => {
  const messageBuffer = new TextEncoder().encode(s);
  const hashBuffer = await crypto.subtle.digest("SHA-256", messageBuffer);
  const hash = encodeHex(hashBuffer);

  return hash;
};
