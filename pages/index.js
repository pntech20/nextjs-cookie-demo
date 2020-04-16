import Link from "next/link";
import useAuth from "../hooks/useAuth";
import AuthService from "../services/auth";

export default (props) => {
  const user = useAuth(props.user);

  return (
    <>
      <h1>
        {user._id
          ? `You're logged in, ${user.name}`
          : "Hello, guest!"}
      </h1>

      {!user._id
        ?
        <Link href="/login">
          <button>Login</button>
        </Link>

        :
        <Link href="/login">
          <button onClick={() => user.logout()}>Logout</button>
        </Link>
      }

      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>
    </>
  );
};

// NODE JS CODE
export async function getServerSideProps(context) {
  return {
    props: {
      user: await AuthService.getUserFromCookie(context.req),
    },
  };
}
