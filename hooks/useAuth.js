import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import Cookie from "js-cookie";

export default function useAuth(initialData) {
  const { data: user } = useSWR(
    "/api/user",
    async (route) => {
      const authRequest = await fetch(route, {
        header: {
          authorization: Cookie.get("cookie-key-name"),
        },
      });

      if (authRequest.ok) {
        return authRequest.json();
      } else {
        Cookie.remove("cookie-key-name");
      }
    },
    { initialData }
  );

  return {
    ...user,
    logout() {
      Cookie.remove("cookie-key-name");
    },
  };
}
