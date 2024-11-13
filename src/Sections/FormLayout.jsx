import { Outlet } from "react-router-dom";
import FormHeader from "../components/FormHeader";

function FormLayout() {
  return (
    <div>
      <FormHeader />
      <Outlet />
    </div>
  );
}

export default FormLayout;
