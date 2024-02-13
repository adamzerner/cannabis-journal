export const isProduction = () => Deno.env.get("HOME") !== "/Users/adamzerner";
