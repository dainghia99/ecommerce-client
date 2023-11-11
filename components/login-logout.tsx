import Link from "next/link";
import { Button } from "./ui/button";
import { UserButton, auth } from "@clerk/nextjs";

const LoginLogout = () => {
  const { userId } = auth();
  return (
    <>
      {userId ? (
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div>
          <Link className="mr-2" href="/sign-in">
            <Button size="sm" type="button">
              Đăng nhập
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm" type="button">
              Đăng ký
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default LoginLogout;
