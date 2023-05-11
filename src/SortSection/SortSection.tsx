interface itemObject {
  id: number,
  name: string
}

export default function SortSection(
  { sort }:
  { sort: itemObject[] },
) {
  return (
    <div className="results sort">
      <p>
        SORT BY
      </p>

      <select>
        {sort.map((item) => (
          <option key={item.id}>
            {item.name}
          </option>
        ))}

        {/* <div className="arrow">▼</div> */}
      </select>
    </div>
  );
}
