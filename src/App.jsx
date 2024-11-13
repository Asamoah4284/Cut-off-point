import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import DashBoard from "./Pages/DashBoard";
import OverView from "./components/OverView";
import StartApplication from "./Pages/StartApplication";
import Grade from "./Pages/Grade";
import FormLayout from "./Sections/FormLayout";
import Electives from "./Pages/Electives";
import ElectivesGrade from "./Pages/ElectiveGrade";
import CompletedForm from "./Pages/CompletedForm";
import Welcome from "./Sections/Welcome";
import VerifyNumber from "./Sections/VerifyNumber";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,

    errorElement: <ErrorPage />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/verify-number",
    element: <VerifyNumber />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "",
        element: <OverView />,

        //  add path for start page like this "dashboard/start" element: <StartApplication/> when you build the component
        //  add path for check status page like this "dashboard/check" element: <CheckStatus/> when you build the component
        //  add path for recommendation page like this "dashboard/recommendation" element: <Recommendation/> when you build the component
        //  add path for update info page like this "dashboard/update" element: <UpdateInfo/> when you build the component
        //  add path for performance page like this "dashboard/performance" element: <Performance/> when you build the component
      },
      {
        path: "/dashboard/start",
        element: <FormLayout />,
        children: [
          {
            path: "",
            element: <StartApplication />,
          },
          {
            path: "/dashboard/start/grade",
            element: <Grade />,
          },
          {
            path: "/dashboard/start/electives",
            element: <Electives />,
          },
          {
            path: "/dashboard/start/elective-grade",
            element: <ElectivesGrade />,
          },
          {
            path: "/dashboard/start/completed",
            element: <CompletedForm />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

{
  /* <div className="flex gap-4 items-center">
<Button>Login</Button>
<p className="text-[#7C7C7C] secondary-paragraph">
  Register as a student or applicant
</p>
</div> */
}

{
  /* <div className="flex gap-4 items-center">
<Button>Login</Button>
<p className="text-[#7C7C7C] secondary-paragraph ">
  Register as an institution
</p>
</div> */
}
