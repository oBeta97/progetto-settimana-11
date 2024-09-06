import { FormEvent, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [searchString, setSearchString] = useState<string>('');

    const navigator = useNavigate();

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        navigator(`/search/${searchString}`);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mt-3">
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <InputGroup.Text className="btn btn-outline-secondary h-100">
                    <FaSearch />
                </InputGroup.Text>
            </InputGroup>
        </Form>

    );
};

export default SearchBar