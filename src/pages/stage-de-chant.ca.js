import React from "react";
import g from "glamorous";

import {List, ListItem, InnerLink, Information, NestedListItem} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Taller de cant"
        imgUrl={vocalImage}
        content={
            <div>
             
                <List>
                    <ListItem>
                        Amb Henk Neven aquest taller associa tècnica vocal i
                        interpretació de la música barroca. Els cantants dividiran el seu temps
                        entre repertori solista, treball de protagonista i de música de conjunt.
                        Cada dia començarà amb un curs col·lectiu sobre qüestions relatives a la
                        posició del cos i a la respiració.
                        <p>
                            Cada participant rebrà diàriament un curs de tècnica vocal amb{" "}
                            <InnerLink to="/ca/henk-neven">
                                Henk Neven
                            </InnerLink>. Amb{" "}
                            <InnerLink to="/ca/helene-dufour">Hélêne Dufour</InnerLink> i{" "}
                            <InnerLink to="/ca/stefano-intrieri">Stefano Intrieri </InnerLink>{" "}
                            treballaran de manera individual la interpretació, així com en petit
                            grup de música de cambra.
                        </p>
                    </ListItem>
                  
                </List>
            </div>
        }
    />
);

export default Vocal;
