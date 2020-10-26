import { shallow } from "enzyme";
import React from "react";
import tvshowJSON from "../../__mock__/tvshow.json";
import { TvShowCard } from "./";

describe("<TvShowCard />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(
      <TvShowCard tvshow={tvshowJSON} onClick={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
