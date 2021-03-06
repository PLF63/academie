import g from "glamorous";
import React from "react";

import {FullWidth} from "../base";
import home from "./home.jpg";
import Block from "./block";
import Testimonials from "./testimonials";
import Sponsors from "./sponsors";
import {phone, tabletUp} from "../mediaQueries";
import Academy from "./academy";

const CrowdBackground = g.div({
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexGrow: 1,
    display: "flex",
    alignItems: "stretch",
});
const Overlay = g.div({
    flexGrow: 1,
    backgroundColor: "black",
    opacity: 0.15,
});

// TODO link program
const Headline = g(Block)({
    alignItems: "flex-start",
});
const CallToActionMain = g.h1({
    color: "white",
    fontSize: 60,
    [phone]: {
        fontSize: 36,
    },
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: "bold",
});
const CallToAction = g.h2({
    color: "white",
    fontSize: 60,
    [phone]: {
        fontSize: 36,
    },
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: "bold",
});

const TestimonialBackground = g.div({backgroundColor: "rgba(0, 48, 91, 1)", flexGrow: 1});

const Home = ({msg}) => (
    <div style={{width: "100%"}}>
        <FullWidth
            height={510}
            mobile={220}
            background={
                <CrowdBackground>
                    <Overlay />
                </CrowdBackground>
            }
        >
            <Headline>
                <CallToActionMain>{msg.title[0]}</CallToActionMain>
                <CallToAction>{msg.title[1]}</CallToAction>
            </Headline>
        </FullWidth>
        <Academy msg={msg} />
        <Testimonials msg={msg} />
        <Sponsors />
    </div>
);
export default Home;
