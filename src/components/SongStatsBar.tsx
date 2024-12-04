type SongStatsBarProps = {
  label: string;
  value: number;
};

const SongStatsBar: React.FC<SongStatsBarProps> = ({ label, value }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SongStatsBar;
