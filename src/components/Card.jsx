import Button from "./Button";
export default function Card() {
  return (
    <figure className="flex  gap-6">
      <div className="bg-gray-300 rounded-md w-28 h-28"></div>
      <figcaption>
        <h4 className="mb-4">
          <span className="font-semi-bold text-lg ">
            University of Cape Coast
          </span>{" "}
          <br /> Cape Coast, Ghana
        </h4>
        <Button>Apply</Button>
      </figcaption>
    </figure>
  );
}
