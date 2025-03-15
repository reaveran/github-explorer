import { Typography } from "@/components";
import { StarIcon } from "@/assets/icons/StarIcon";
import { formatNumber } from "@/utils/formatNumber";

type RepositoryCardProps = {
  repository: Repository;
};

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <div className="block p-4 bg-slate-100 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between mb-2 gap-2 items-start">
        <Typography variant="h2">{repository.name}</Typography>
        <div className="flex items-center gap-1">
          <Typography variant="small" className="font-semibold text-gray-600">
            {formatNumber(repository.stargazers_count)}
          </Typography>
          <div className="text-yellow-500">
            <StarIcon />
          </div>
        </div>
      </div>
      <Typography>{repository.description}</Typography>
    </div>
  );
};

export default RepositoryCard;
