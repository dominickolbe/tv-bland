import { shallow } from "enzyme";
import React from "react";
import { SearchBar } from "./";

describe("<SearchBar />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(
      <SearchBar
        query=""
        onChangeQuery={(e) => jest.fn()}
        onSubmit={() => jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders snapshots, with query", () => {
    const wrapper = shallow(
      <SearchBar
        query="example search query"
        onChangeQuery={(e) => jest.fn()}
        onSubmit={() => jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
