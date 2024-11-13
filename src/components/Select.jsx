function Select({ onChange, value }) {
  const gradeOptions = ["A1", "B2", "C3", "D4", "E5", "F9"];
  return (
    <select
      className="absolute right-2 top-2 p-2 bg-transparent border-none outline-none cursor-pointer"
      onChange={(e) => onChange(e.target.value)}
      // value={value}
    >
      <option value="" disabled></option>
      {gradeOptions.map((grade) => (
        <option key={grade} value={grade}>
          {grade}
        </option>
      ))}
    </select>
  );
}

export default Select;
