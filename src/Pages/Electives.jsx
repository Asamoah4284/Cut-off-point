import { useState } from "react";
import Button from "../components/Button";

import GradeInput from "../components/GradeInput"; // Import the reusable component
import { Link } from "react-router-dom";

function Electives() {
  const [mathGrade, setMathGrade] = useState("");
  const [scienceGrade, setScienceGrade] = useState("");
  const [englishGrade, setEnglishGrade] = useState("");
  const [socialStudiesGrade, setSocialStudiesGrade] = useState("");

  return (
    <div className="">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column */}
          <div>
            <GradeInput
              label="Elective 1"
              value={mathGrade}
              onChange={setMathGrade}
              placeholder="Select Elective"
            />
            <GradeInput
              label="Elective 2"
              value={scienceGrade}
              onChange={setScienceGrade}
              placeholder="Select Elective"
            />
          </div>

          {/* Second Column */}
          <div>
            <GradeInput
              label="Elective 3"
              value={englishGrade}
              onChange={setEnglishGrade}
              placeholder="Select Elective"
            />
            <GradeInput
              label="Elective 4"
              value={socialStudiesGrade}
              onChange={setSocialStudiesGrade}
              placeholder="Select Elective"
            />
          </div>
        </div>
        <Link to="/dashboard/start/elective-grade">
          <Button>Continue</Button>
        </Link>
      </form>
    </div>
  );
}

export default Electives;
