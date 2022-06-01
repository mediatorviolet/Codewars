/**
 * 3 kyu Papers, Please
 *
 */

function Inspector() {
    let beginning, ending;
    this.DIRECTIVES_CONSTANTS = {
        NATIONS: {
            id: "nations",
            searchFn: (string) =>
                string.includes("Allow") || string.includes("Deny"),
            allowedFn: (string) => string.includes("Allow"),
            deniedFn: (string) => string.includes("Deny"),
            getNationsFn: (string) => {
                let nations = string.slice(17).split(",");
                let cleanedNations = nations.map((nation) =>
                    this.tools.cleanString(nation)
                );
                return cleanedNations;
            },
        },
        DOCUMENTS: {
            id: "documents",
            searchFn: (string) =>
                string.includes("require") && !string.includes("vaccination"),
        },
        VACCINATIONS: {
            id: "vaccinations",
            searchFn: (string) => string.includes("vaccination"),
            getNationsFn: (string) => {
                let start = string.search("Citizens of") + 12;
                let end = string.search("require");

                let nations = string.slice(start, end).split(",");
                let cleanedNations = nations.map((nation) =>
                    this.tools.cleanString(nation)
                );
                return cleanedNations;
            },
            getVaccinationFn: (string) => {
                let start = string.search("require") + 8;
                let end = string.search("vaccination");

                let vaccinations = string.slice(start, end).split(",");
                let cleanedVaccinations = vaccinations.map((vacc) =>
                    this.tools.cleanString(vacc)
                );
                return cleanedVaccinations;
            },
        },
        WANTED: {
            id: "wanted",
            searchFn: (string) => string.includes("Wanted"),
            getWantedFn: (string) => {
                let wanted = string.slice(21).split(",");
                let cleanedWanted = wanted.map((w) =>
                    this.tools.cleanString(w)
                );
                return cleanedWanted;
            },
        },
    };

    this.NATIONS = {
        ARSTOTZKA: {
            id: "arstotzka",
        },
    };

    this.tools = {
        cleanString: (string) => {
            return string.trim().toLowerCase();
        },
        formatEntrantIdDocuments: (entrant) => {
            let formattedDocs = [];
            let tempArr = [];
            Object.keys(entrant).forEach((docName) => {
                tempArr.push(
                    entrant[docName].split("\n").map((prop) => prop.split(":"))
                );

                tempArr.map((doc) => {
                    return doc.map((prop) => {
                        formattedDocs = {
                            ...formattedDocs,
                            [docName]: {
                                ...formattedDocs[docName],
                                [prop[0]]: this.tools.cleanString(prop[1]),
                            },
                        };
                    });
                });
            });
            return formattedDocs;
        },
        /**
         *
         * @param {Object} papers
         */
        checkMismatch: (papers) => {
            // Todo: check paper mismatch
            let errors = {};
            let arr = [];

            Object.keys(papers).map((paper) => {
                arr.push(papers[paper]);
            });

            arr.reduce((acc, cur) => {
                Object.key;
            }, {});
            console.log("papers", papers);
            console.log(arr);
        },
        /**
         *
         * @param {Array} docs
         */
        getLongestDoc: (docs) => {
            docs.map((doc) => {
                return Math.max(Object.keys(doc).length);
            });
        },
    };

    this.receiveBulletin = (bulletin) => {
        beginning = new Date();
        const DOCUMENTS = this.DIRECTIVES_CONSTANTS.DOCUMENTS;
        const NATIONS = this.DIRECTIVES_CONSTANTS.NATIONS;
        const VACCINATIONS = this.DIRECTIVES_CONSTANTS.VACCINATIONS;
        const WANTED = this.DIRECTIVES_CONSTANTS.WANTED;

        let directives = {
            nations: {
                allowed: [],
                denied: [],
            },
            documents: {
                entrants: [],
                foreigners: [],
                citizens: {
                    arstotzka: [],
                    antegria: [],
                    impor: [],
                    kolechia: [],
                    obristan: [],
                    republia: [],
                    united_federation: [],
                },
                workers: [],
            },
            vaccinations: {
                entrants: [],
                foreigners: [],
                citizens: {
                    arstotzka: [],
                    antegria: [],
                    impor: [],
                    kolechia: [],
                    obristan: [],
                    republia: [],
                    united_federation: [],
                },
                workers: [],
            },
            wanted: [],
        };

        let bulletinToArr = bulletin.split("\n");
        // console.log(bulletinToArr[2]);
        // console.log(bulletinToArr[2].search("require"));
        // console.log(VACCINATIONS.getVaccinationFn(bulletinToArr[2]));

        bulletinToArr.forEach((dir) => {
            console.log(dir);
            switch (true) {
                // Documents
                case DOCUMENTS.searchFn(dir):
                    console.log("DOCUMENTS");
                    directives.documents[
                        this.tools.cleanString(dir.split("require")[0])
                    ].push(this.tools.cleanString(dir.split("require")[1]));
                    break;

                // Nations
                case NATIONS.searchFn(dir):
                    console.log("NATIONS");
                    if (NATIONS.allowedFn(dir)) {
                        console.log("ALLOWED");

                        NATIONS.getNationsFn(dir).forEach((nation) => {
                            directives.nations.allowed.push(nation);
                        });
                    }
                    if (NATIONS.deniedFn(dir)) {
                        console.log("DENIED");

                        NATIONS.getNationsFn(dir).forEach((nation) => {
                            directives.nations.denied.push(nation);
                        });
                    }
                    break;

                // Vaccinations
                case VACCINATIONS.searchFn(dir):
                    console.log("VACCINATIONS");
                    let nations = VACCINATIONS.getNationsFn(dir);

                    nations.forEach((nation) => {
                        VACCINATIONS.getVaccinationFn(dir).forEach((vacc) => {
                            directives.vaccinations.citizens[nation].push(vacc);
                        });
                    });

                    break;

                // Wanted
                case WANTED.searchFn(dir):
                    console.log("WANTED");

                    WANTED.getWantedFn(dir).forEach((w) => {
                        directives.wanted.push(w);
                    });
                    break;
                default:
                    console.log("default..");
                    break;
            }
        });
        return directives;
    };

    this.inspect = (entrant) => {
        const papers = this.tools.formatEntrantIdDocuments(entrant);
        ending = new Date();
        console.log(`Execution time: ${ending - beginning}ms`);
        return this.tools.checkMismatch(papers);
    };
}

const inspector = new Inspector();
const bulletin =
    "Entrants require passport\nAllow citizens of Arstotzka, Obristan\nCitizens of Antegria, Republia, Obristan require polio vaccination";
const josef = {
    passport:
        "ID#: GC07D-FU8AR\nNATION: Arstotzka\nNAME: Costanza, Josef\nDOB: 1933.11.28\nSEX: M\nISS: East Grestin\nEXP: 1983.03.15",
};
const roman = {
    passport:
        "ID#: WK9XA-LKM0Q\nNATION: United Federation\nNAME: Dolanski, Roman\nDOB: 1933.01.01\nSEX: M\nISS: Shingleton\nEXP: 1983.05.12",
    grant_of_asylum:
        "NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20",
};

console.log(inspector.receiveBulletin(bulletin));
console.log(inspector.inspect(roman));
