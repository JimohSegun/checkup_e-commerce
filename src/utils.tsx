import { redirect } from "react-router-dom";

const requireAuth = (request: Request) => {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedin") === "true";

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirect=${pathname}`
    );
  }
};

export default requireAuth;
