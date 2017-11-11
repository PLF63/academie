import g from "glamorous";
import React from "react";
import {FormattedMessage} from "react-intl";

import {Link} from "../base";
import moviment from "./moviment.jpg";
import symposium from "./symposium.jpeg";

const Container = g.div({
    padding: "30px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});
const Sponsor = g.div({
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:not(:last-child)": {
        marginBottom: 20,
    },
});
const Text = g.p({
    textAlign: "center",
});

const Sponsors = () => (
    <Container>
        <Sponsor>
            <img src={moviment} alt="Moviment Coral Català" width={150} />
            <Text>
                <FormattedMessage id="moviment" />{" "}
                <Link href="https://www.facebook.com/Moviment-Coral-Catal%C3%A0-1577322619247611/?fref=ts">
                    <FormattedMessage id="movimentTitle" />
                </Link>
            </Text>
        </Sponsor>
        <Sponsor>
            <img src={symposium} alt="Symposium" width={150} />
            <Text>
                <FormattedMessage id="symposium" />{" "}
                <Link href="http://www.wscm11.cat/accueil">
                    <FormattedMessage id="symposiumTitle" />
                </Link>
            </Text>
        </Sponsor>
    </Container>
);

export default Sponsors;
