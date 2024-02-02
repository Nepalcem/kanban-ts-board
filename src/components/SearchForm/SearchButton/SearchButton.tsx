import Button from "react-bootstrap/Button";

interface SearchButtonProps {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, isLoading }) => {
  return (
    <Button
      variant="primary"
      type="submit"
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      style={{ whiteSpace: "nowrap" }}
    >
      {isLoading ? "Loading..." : "Click to load"}
    </Button>
  );
};

export default SearchButton;
