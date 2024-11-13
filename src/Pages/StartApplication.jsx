import { useState } from "react";
import Button from "../components/Button";

import GradeInput from "../components/GradeInput"; // Import the reusable component
import { Link } from "react-router-dom";

function StartApplication() {
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
              label="SHS Progamme"
              value={mathGrade}
              onChange={setMathGrade}
              placeholder="Programme"
            />
            <GradeInput
              label="Certificate"
              value={scienceGrade}
              onChange={setScienceGrade}
              placeholder="Wassce"
            />
          </div>

          {/* Second Column */}
          <div>
            <GradeInput
              label="Senior High School"
              value={englishGrade}
              onChange={setEnglishGrade}
              placeholder="E.g Aburi Girls"
            />
            <GradeInput
              label="Country"
              value={socialStudiesGrade}
              onChange={setSocialStudiesGrade}
              placeholder="Ghana"
            />
          </div>
        </div>
        <Link to="/dashboard/start/grade">
          <Button>Continue</Button>
        </Link>
      </form>
    </div>
  );
}

export default StartApplication;
