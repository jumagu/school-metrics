import { useEffect } from "react";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { HomePage, WelcomePage, NotFoundPage } from "./pages";
import {
  RequireRole,
  PublicRoute,
  PrivateRoute,
  CheckingAuth,
} from "./components";

import { LoginPage, AuthLayout } from "./modules/auth/";
import {
  TeacherLayout,
  TeacherChatPage,
  TeacherContactsPage,
  TeacherSubjectsPage,
} from "./modules/teacher";
import {
  ParentsLayout,
  ParentProvider,
  ParentsChatPage,
  ParentsContactsPage,
  ParentsOverviewPage,
  ParentsPerformancePage,
} from "./modules/parents";
import {
  AdminLayout,
  AdminUsersPage,
  AdminParentsPage,
  AdminStudentsPage,
  AdminTeachersPage,
  AdminDashboardPage,
  AdminAcademicAreasPage,
} from "./modules/admin";
import {
  StudentLayout,
  StudentProvider,
  StudentOverviewPage,
  StudentPerformancePage,
} from "./modules/student";

import { useAuthStore } from "./hooks";

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      // Welcome
      {
        path: "welcome",
        element: <WelcomePage />,
      },
      // Teacher
      {
        path: "teacher/*",
        element: (
          <RequireRole allowedRoles={["PROFESSOR"]}>
            <TeacherLayout />
          </RequireRole>
        ),
        children: [
          {
            path: "subjects",
            element: <TeacherSubjectsPage />,
          },
          // {
          //   path: "subject/student/:studentId",
          //   element: <TeacherReport />,
          // },
          {
            path: "contacts",
            element: <TeacherContactsPage />,
          },
          {
            path: "chat/:parentId",
            element: <TeacherChatPage />,
          },
          {
            path: "*",
            element: <Navigate to="subjects" replace />,
          },
        ],
      },
      // Parent
      {
        path: "parents/*",
        element: (
          <RequireRole allowedRoles={["PARENTS"]}>
            <ParentProvider>
              <ParentsLayout />
            </ParentProvider>
          </RequireRole>
        ),
        children: [
          {
            path: "my-child/overview",
            element: <ParentsOverviewPage />,
          },
          {
            path: "my-child/performance",
            element: <ParentsPerformancePage />,
          },
          {
            path: "contacts",
            element: <ParentsContactsPage />,
          },
          {
            path: "chat/:teacherId",
            element: <ParentsChatPage />,
          },
          {
            path: "*",
            element: <Navigate to="my-child/overview" replace />,
          },
        ],
      },
      // Student
      {
        path: "student",
        element: (
          <RequireRole allowedRoles={["STUDENT"]}>
            <StudentProvider>
              <StudentLayout />
            </StudentProvider>
          </RequireRole>
        ),
        children: [
          {
            path: "overview",
            element: <StudentOverviewPage />,
          },
          {
            path: "performance",
            element: <StudentPerformancePage />,
          },
          {
            path: "*",
            element: <Navigate to="overview" replace />,
          },
        ],
      },
      // Admin
      {
        path: "admin/*",
        element: (
          <RequireRole allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </RequireRole>
        ),
        children: [
          {
            path: "dashboard",
            element: <AdminDashboardPage />,
          },
          {
            path: "users",
            element: <AdminUsersPage />,
          },
          {
            path: "students",
            element: <AdminStudentsPage />,
          },
          {
            path: "teachers",
            element: <AdminTeachersPage />,
          },
          {
            path: "parents",
            element: <AdminParentsPage />,
          },
          {
            path: "academic-areas",
            element: <AdminAcademicAreasPage />,
          },
          {
            path: "*",
            element: <Navigate to="dashboard" replace />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="welcome" replace />,
      },
    ],
  },
  {
    path: "/auth/*",
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <Navigate to="login" replace />,
      },
    ],
  },
]);

function App() {
  const { status, startRefreshToken } = useAuthStore();

  useEffect(() => {
    startRefreshToken();
  }, []);

  if (status === "checking") return <CheckingAuth />;

  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </>
  );
}

export default App;
