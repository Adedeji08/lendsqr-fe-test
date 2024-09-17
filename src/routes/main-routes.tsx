
import MainLayout from "../layout";
import AuthGuard from "../utilities/private-route";
import Dashboard from "../view/dashboard/dashboard";
import Users from "../view/users/users";

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
        path: "/users",
        element: <Users />,
      },
  ],
};

export default MainRoutes;
