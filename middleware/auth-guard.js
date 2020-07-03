export default function({ store, redirect, route }) {
  const userLoggedIn = typeof store.state.user.user.uid !== "undefined";
  const isPublicRoute = ["login", "reset", "register", "style-guide"].includes(
    route.name
  );
  !userLoggedIn && !isPublicRoute ? redirect("/login") : "";
}
