import Button from "../components/Button";

function Transform() {
  return (
    <div className="pb-16 px-8 lg:px-24 hero-left ">
      <h1
        className="primary-header text-center font-semibold leading-tight md:leading-snug lg:leading-snug text-gray-900 mb-8 py-2 md:px-28 lg:px-238 
      "
      >
        Transforming how <span className="text-[#263ADE]">African</span>{" "}
        students <br /> access higher education
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border border-[#263ADE] rounded-lg shadow-md py-8 px-6 bg-[#FBFBFB] flex flex-col gap-4">
          <h2 className="secondary-header font-semibold">
            For <span className="text-[#263ADE]">Applicants</span>
          </h2>
          <p className="text-[#4D4D4D] primary-paragraph">
            Students can access the platform on any device, and apply to
            multiple institutions without the hassle of individual applications.
          </p>
        </div>
        <div className="border border-[#263ADE] rounded-lg shadow-md py-8 px-6 bg-[#FBFBFB] flex flex-col gap-2">
          <h2 className="secondary-header mb-2 font-semibold">
            For <span className="text-[#263ADE]">Institutions</span>
          </h2>
          <p className="text-[#4D4D4D] primary-paragraph">
            CutoffPoint offers a streamlined admissions process, reducing
            administrative workloads and increasing access to a diverse pool of
            applicants from across the continent.
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <Button>Create Account</Button>
          <p className="text-[#7C7C7C] secondary-paragraph">
            Register as a student or applicant
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Button>Create Account</Button>
          <p className="text-[#7C7C7C] secondary-paragraph ">
            Register as an institution
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Transform;

//  The Prince, is a
// classic for all students of political science
// The
// Models of the Hypnotic Technique of Milton H. Erickson
