import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem} from "../components/base";
import choralImage from "../choral.jpg";
import InnerPage from "../components/innerPage";

const Choral = () => (
    <InnerPage
        name="Stage choral"
        imgUrl={choralImage}
        content={
            <div>
                <p>
                    Le stage de chant choral été 2019 est dirigé par{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, directeur
                    musical de l'académie, et par{" "}
                    <InnerLink to="/fr/adam-vidovic">Adam Vidovic</InnerLink>. Le chœur compte 28
                    choristes maximum avec équilibre des pupitres. Il s'adresse à des choristes
                    expérimentés.
                </p>
                <p>
                    En parallèle de leurs répétitions, les choristes bénéficient chaque jour de
                    cours de technique vocale avec{" "}
                    <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink>.
                </p>
                <p>Le programme détaillé du stage choral 2019 sera publié en janvier 2019.</p>
                <p>
                    Les journées commencent à 9h30 par un cours collectif d’une heure de technique
                    vocale avec <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink> :
                    posture, respiration, technique vocale selon une progression pré-établie tout au
                    long de la semaine.
                </p>
                <p>
                    Ensuite, jusqu’à 13h00, les participants du stage de chant choral travaillent le
                    programme musical soit avec{" "}
                    <InnerLink to="/fr/adam-vidovic">Adam Vidovic</InnerLink>, soit avec{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>. Selon les
                    moments de la journée, le chœur travaille a cappella ou accompagné par{" "}
                    <InnerLink to="/fr/stefano-intrieri">Stefano Intrieri</InnerLink>.
                </p>
                <p>
                    Les répétitions reprennent à 16h30 jusqu’à 19h00, avec le chef avec lequel le
                    chœur n’a pas travaillé le matin.
                </p>
                <p>
                    Le début de l’après-midi est consacré, par rotation, à des cours de technique
                    vocale par pupitre avec{" "}
                    <InnerLink to="/fr/muriel-ferraro">Muriel Ferraro</InnerLink>. Le stage de chant
                    choral de l’Académie d’été attache une importance particulière à la qualité
                    vocale et donne aux choristes le maximum de temps de travail en technique vocale
                    pour y parvenir.
                </p>
                <p>
                    Il n’y a pas de répétition le vendredi après-midi et, sauf exception, jamais le
                    soir.
                </p>
                <p>
                    Les choristes reçoivent les partitions par mail avant le stage et disposent,
                    s’ils en éprouvent le besoin, de fichiers audios pour préparer les stages. Les
                    partitions doivent impérativement avoir été travaillées par tous avant le stage
                    de chant choral afin de consacrer la semaine uniquement au travail musical et
                    pas au déchiffrage !
                </p>
            </div>
        }
    />
);

export default Choral;
