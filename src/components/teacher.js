import g from "glamorous";
import React from "react";
import RawLink from "gatsby-link";
import {FormattedMessage} from "react-intl";

import {H3} from "./base";

const Container = g.div({
    // height: 250,
});
const Header = g.div({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
});
const Short = g.div({});
const Link = g(RawLink)({color: "initial"});
const Classes = g.ul({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
});

const renderClass = className => (
    <li key={className}>
        <Link to={`/en/${className}`}>
            <FormattedMessage id={className} />
        </Link>
    </li>
);

const Teacher = ({name, short, link, classes}) => (
    <Container>
        <Header>
            <H3>
                <Link to={`/en/${link}`}>{name}</Link>
            </H3>
            {classes && <Classes>{classes.map(renderClass)}</Classes>}
        </Header>
        <Short>{short}</Short>
    </Container>
);
export default Teacher;
