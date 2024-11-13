import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Card from "./Card";

export default function OverView() {
  return (
    <main className="flex-1 p-6  overflow-y-scroll">
      <div className="bg-[#F6F6F6] py-2 px-10 rounded-md w-auto">
        <h3 className="text-xl">
          Complete <span className="font-bold">Academic</span> Info to see
          better <span className="font-bold">Programme Recommendations</span>
          <span className="ml-2">
            <ArrowRightAltIcon />
          </span>
        </h3>
      </div>
      <section className="grid grid-cols-2 gap-16 p-10 mt-10">
        <div className="flex flex-col gap-16 px-4 py-10 bg-[#F6F6F6] rounded-md">
          <div className="flex justify-between">
            <h4 className="text-xl bg-black p-2 text-white rounded-md">
              Our Recommendations
            </h4>
            <ArrowRightAltIcon className="text-xl" />
          </div>
          <p className="text-lg">Update your results to show recommendations</p>
        </div>
        <div className="flex flex-col gap-16 px-4 py-10 bg-blue-600 rounded-md">
          <div className="flex justify-between">
            <h4 className="text-xl p-2 rounded-md bg-[#FFFFFF]">Admissions</h4>
            <ArrowRightAltIcon className="text-xl text-white" />
          </div>
          <p className="text-lg text-white">
            5 universities are currently accepting applicants
          </p>
        </div>
      </section>
      <section className="p-10">
        <h3 className="text-xl">Top Universities and Colleges</h3>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
