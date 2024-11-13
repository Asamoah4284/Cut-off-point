import Button from "../components/Button";

import { Link } from "react-router-dom";

function CompletedForm() {
  return (
    <div className="">
      <form className="bg-white p-8 rounded-lg py-16 shadow-md w-full max-w-3xl mx-auto">
        <h1 className="mb-4">Hello Kojo</h1>
        <p className="mb-3">
          Your <strong>Academic Info</strong> has succesfully Updated
        </p>
        <Link to="/dashboard/start/elective-grade">
          <div className="flex gap-4">
            <Button>Check Performance</Button>
            <Button>Check Programmes</Button>
          </div>
        </Link>
      </form>
    </div>
  );
}

export default CompletedForm;
