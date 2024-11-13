function Button({ children }) {
  return (
    <button className="bg-[#263ADE] px-4 py-1 rounded text-white font-semibold hover:bg-blue-600">
      {children}
    </button>
  );
}

export default Button;
