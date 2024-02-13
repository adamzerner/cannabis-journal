import { Button } from "rfui";
import { JSX } from "preact/jsx-runtime";

export const DeleteAccountForm = () => {
  const onClick = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    const confirmed = confirm("Are you sure you want to delete your account?");

    if (!confirmed) {
      e.preventDefault();
    }
  };

  return (
    <form class="self-start" method="post">
      <Button onClick={onClick} variant="danger-secondary">
        Delete account
      </Button>
    </form>
  );
};
