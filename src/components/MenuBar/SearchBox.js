import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { RiSearchLine } from "react-icons/ri";

const SearchBox = () => {
  return (
    <>
      <Form className="search-box">
        <Form.Control type="search" placeholder="Search" />
        <Button className="search-icon">
          <RiSearchLine />
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
