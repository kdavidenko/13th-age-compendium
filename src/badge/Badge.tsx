import Chip from '@mui/material/Chip';

interface BadgeProps {
  label: string;
  handleDelete: () => void;
}

const Badge = ({label, handleDelete}:BadgeProps) => {

  return <Chip label={label} variant="outlined" onDelete={handleDelete} />
};

export default Badge;