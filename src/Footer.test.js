import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

it('should render Copyright company and version', () =>{
    const wrapper = shallow(<Footer/>);
    const a= wrapper.find('a');
    const result1=a.text();
    expect(result1).toBe('DareDev.dz');

    const strong=wrapper.find('strong');
    const result2=strong.text();
    expect(result2).toBe('Copyright © 2019-2020 '+result1+'.');
});