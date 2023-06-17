interface SortOption {
  id: number;
  name: string;
}

type SortSectionProps = {
  sort: SortOption[];
};

export default function SortSection({ sort }: SortSectionProps) {
  return (
    <div className="results sort">
      <p>SORT BY</p>

      <select>
        {sort.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}

        {/* <div className="arrow">▼</div> */}
      </select>
    </div>
  );
}
