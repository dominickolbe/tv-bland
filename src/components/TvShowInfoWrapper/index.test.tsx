import { shallow } from "enzyme";
import React from "react";
import tvshowJSON from "../../__mock__/tvshow.json";
import { TvShowInfoWrapper } from "./";

describe("<TvShowInfoWrapper />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<TvShowInfoWrapper tvshow={tvshowJSON} />);
    expect(wrapper).toMatchSnapshot();
  });
});
