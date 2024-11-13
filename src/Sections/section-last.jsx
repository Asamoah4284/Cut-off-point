function SectionLast() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 place-items-center list-none lg:px-28 pb-8 font-semibold  pt-24 bg-[#F4F4F4]">
      <div className="space-y-2">
        <li>university cut-off points</li>
        <li>Programmes Overview</li>
      </div>
      <div className="space-y-4">
        <li className="flex items-center justify-center gap-2">
          Study in Ghana{" "}
          <span>
            <img src="/images/gh.jpg" alt="ghana Flag" width={25} />
          </span>
        </li>

        <li className="flex items-center justify-center gap-2">
          Study in Nigeria{" "}
          <span>
            <img src="/images/ng.png" alt="ghana Flag" width={25} />
          </span>
        </li>
      </div>
      <div className="space-y-4">
        <li>Team</li>
        <li>Partner</li>
      </div>
      <div className="space-y-4">
        <li>Disclamer</li>
        <li>Policy</li>
      </div>
    </div>
  );
}

export default SectionLast;
