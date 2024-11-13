function GradeInput({ label, placeholder }) {
  return (
    <div className="flex flex-col mb-6 relative">
      <label className="text-gray-600 font-medium" htmlFor={label}>
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className="p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full bg-gray-100"
          type="text"
          id={label}
          placeholder={placeholder}
          // value={value}
        />
      </div>
    </div>
  );
}

export default GradeInput;
