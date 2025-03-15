type SkeletonProps = {
  width?: number;
  height?: number;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height = 20,
  className,
}) => {
  return (
    <div className="w-full animate-pulse">
      <div
        className={`bg-gray-300 rounded-lg ${!width ? "w-full" : ""} ${className}`}
        style={{ width, height }}
      />
    </div>
  );
};

export default Skeleton;
