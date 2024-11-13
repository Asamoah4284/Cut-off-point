import { useState } from "react";
import Button from "../components/Button";

import GradeInput from "../components/GradeInput"; // Import the reusable component
import { Link } from "react-router-dom";

function ElectivesGrade() {
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
              label="Government"
              value={mathGrade}
              onChange={setMathGrade}
              placeholder="Select Grade"
            />
            <GradeInput
              label="History"
              value={scienceGrade}
              onChange={setScienceGrade}
              placeholder="Select Grade"
            />
          </div>

          {/* Second Column */}
          <div>
            <GradeInput
              label="Elective Maths"
              value={englishGrade}
              onChange={setEnglishGrade}
              placeholder="Select Grade"
            />
            <GradeInput
              label="Economics"
              value={socialStudiesGrade}
              onChange={setSocialStudiesGrade}
              placeholder="Select Grade"
            />
          </div>
        </div>
        <Link to="/dashboard/start/completed">
          <Button>Continue</Button>
        </Link>
      </form>
    </div>
  );
}

export default ElectivesGrade;
