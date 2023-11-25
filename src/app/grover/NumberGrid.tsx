import { Property } from "csstype";

export interface NumberGridProps {
  numbers: [number, Property.BackgroundColor | undefined][][];
}

export default function NumberGrid({ numbers }: NumberGridProps) {
  return (
    <table className="w-fit border-collapse">
      <tbody>
        {numbers.map((row) => (
          <tr key={Math.random()}>
            {row.map(([entry, color]) => (
              <td
                key={Math.random()}
                className="px-4 border border-solid border-white"
                style={{
                  backgroundColor: color,
                }}
              >
                <p className="text-center">{entry}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
