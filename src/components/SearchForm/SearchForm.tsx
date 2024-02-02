import SearchButton from "components/SearchForm/SearchButton/SearchButton";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { SimplifiedIssue } from "components/AppTypes/App.Types";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { StyledForm } from "./SearchForm.styled";

function SearchForm() {
  const [inputValue, setInputValue] = useState<string>(
    "https://github.com/facebook/react"
  );
  const [issues, setIssues] = useState<SimplifiedIssue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const openRequest = await fetch(
        `https://api.github.com/repos/Nepalcem/car-rental-service/issues`
      ).then((res) => res.json());

      const doneRequest = await fetch(
        `https://api.github.com/repos/Nepalcem/car-rental-service/issues?state=closed`
      ).then((res) => res.json());
      setIssues([...openRequest, ...doneRequest]);
    } catch (error: any) {
      console.error("Error fetching issues:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(issues);
  }, [issues]);

  return (
    <div>
      <h1>SearchForm</h1>
      <div>
        <StyledForm onSubmit={handleSubmit} className="mb-3">
          <InputGroup >
            <InputGroup.Text id="basic-addon3">
              https://github.com/user/repo/
            </InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
              name="repo"
              placeholder="Enter repo URL"
              onChange={handleInputChange}
              value={inputValue}
              className="w-40"
            />
          </InputGroup>
          <SearchButton onClick={handleSubmit} isLoading={isLoading} />
        </StyledForm>
      </div>
    </div>
  );
}

export default SearchForm;
