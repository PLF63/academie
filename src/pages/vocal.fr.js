import React from "react";
import g from "glamorous";

import {Link, InnerLink} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Stage de chant"
        imgUrl={vocalImage}
        content={
            <div>
                <p>
                    Ce stage associe technique vocale et interprétation de la musique baroque. Les
                    chanteurs partageront leur temps entre répertoire soliste, travail de rôle et
                    musique d’ensemble. Chaque journée débute par un cours collectif sur les
                    questions relatives à la posture et à la respiration.
                </p>
                <p>
                    Chaque stagiaire reçoit quotidiennement un cours de technique vocale avec
                    Isabelle Germain. Avec{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Hélène Dufour</InnerLink> et{" "}
                    <InnerLink to="/fr/stephano-intrieri">Stefano Intrieri</InnerLink>, les
                    stagiaires travaillent, soit de façon individuelle en interprétation, soit en
                    petit groupe en musique de chambre. Avec{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Josep Cabré</InnerLink>, les stagiaires
                    travaillent plus particulièrement le répertoire polyphonique.
                </p>
                <p>
                    <Link href="https://docs.wixstatic.com/ugd/169d18_1fd457e6017f483baa4cc95c60cd5950.pdf">
                        Télécharger le programme
                    </Link>
                </p>
            </div>
        }
    />
);

export default Vocal;