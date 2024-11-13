import { Button } from "@mui/material";
function FormHeader() {
  return (
    <div className="px-6 md:px-16 py-8">
      <div className="bg-[#F6F6F6] py-4 px-8 rounded-lg w-full md:w-auto flex justify-between items-center gap-4 md:gap-10 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">Basic Info</h3>
        <Button>Info</Button>
      </div>
      <p className="mt-6 text-gray-700 font-medium">
        Core Subjects - Choose Electives - Elective Subjects
      </p>
    </div>
  );
}

export default FormHeader;
