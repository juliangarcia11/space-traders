import { type TStats } from "~/api";

export async function Stats(props: { stats: TStats }) {
  const stats = Object.entries(props.stats).map(([key, value]) => {
    return (
      <div
        key={key}
        data-testid={key}
        className="dark:bg-black/5w0 flex flex-col items-center rounded-xl bg-white/50 px-6 py-4 shadow-xl"
      >
        <div className="font-thin">{key.toUpperCase()}</div>
        <div className="text-5xl font-bold text-blue-300 dark:text-blue-700">
          {value}
        </div>
      </div>
    );
  });

  return (
    <div
      className="flex flex-col justify-around gap-4 md:flex-row"
      data-testid="stats"
    >
      {stats}
    </div>
  );
}
