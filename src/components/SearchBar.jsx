export default function SearchBar({ search, handleSearch }) {

  return (
    <input
      type="text"
      placeholder="Search by author..."
      value={search}
      onChange={handleSearch}
      className="border p-2 rounded w-full mb-6"
    />
  );
}