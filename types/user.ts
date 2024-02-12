export type User = {
  id: string;
  createdAt: number;
  email: string;
  hashedPassword: string;
  resetPasswordToken: string | null;
};
