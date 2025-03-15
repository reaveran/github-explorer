type SkeletonProps = {
  width?: number;
  height?: number;
  className?: string;
  testId?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height = 20,
  className,
  testId = "skeleton-test",
}) => {
  return (
    <div className="w-full animate-pulse">
      <div
        data-testId={testId}
        className={`bg-gray-300 rounded-lg ${!width ? "w-full" : ""} ${className}`}
        style={{ width, height }}
      />
    </div>
  );
};

export default Skeleton;
