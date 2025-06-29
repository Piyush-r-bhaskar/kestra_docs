export interface Author {
    name: string
    role: string
    image: string
}

export interface AuthorsData {
    [key: string]: Author
}

const authorsData: AuthorsData = {
    edarras: {
        name: "Emmanuel Darras",
        role: "CEO",
        image: "/landing/company/teams/edarras-sm.png"
    },
    ldehon: {
        name: "Ludovic Dehon",
        role: "CTO",
        image: "/landing/company/teams/ldehon-sm.png"
    },
    ageller: {
        name: "Anna Geller",
        role: "Product Lead",
        image: "/landing/company/teams/ageller-sm.png"
    },
    achinbat: {
        name: "Anuun Chinbat",
        role: "Software Engineer",
        image: "/landing/company/teams/achinbat-sm.png"
    },
    bmulier: {
        name: "Brian Mulier",
        role: "Software Engineer",
        image: "/landing/company/teams/bmulier-sm.png"
    },
    bpimpaud: {
        name: "Benoit Pimpaud",
        role: "Product Owner",
        image: "/landing/company/teams/bpimpaud-sm.png"
    },
    dkhan: {
        name: "David Khan",
        role: "Sales Leader",
        image: "/landing/company/teams/dkhan-sm.png"
    },
    dradecic: {
        name: "Dario Radecic",
        role: "Data Scientist",
        image: "/landing/company/teams/dradecic-sm.png"
    },
    federico: {
        name: "Federico Trotta",
        role: "Technical Writer",
        image: "/landing/company/teams/ftrotta-sm.png"
    },
    fhussonnois: {
        name: "Florian Hussonnois",
        role: "Lead Software Engineer",
        image: "/landing/company/teams/fhussonnois-sm.png"
    },
    jlegrand: {
        name: "Julien Legrand",
        role: "Software Engineer",
        image: "/landing/company/teams/jlegrand-sm.png"
    },
    kfleming: {
        name: "Kevin Fleming",
        role: "Software Engineer",
        image: "/landing/company/teams/kfleming-sm.png"
    },
    lmathieu: {
        name: "Loïc Mathieu",
        role: "Lead Software Engineer",
        image: "/landing/company/teams/lmathieu-sm.png"
    },
    mproset: {
        name: "Martin-Pierre Roset",
        role: "Lead Growth & Marketing",
        image: "/landing/company/teams/mproset-sm.png"
    },
    mpaunovic: {
        name: "Miloš Paunović",
        role: "Software Engineer",
        image: "/landing/company/teams/mpaunovic-sm.png"
    },
    ncallens: {
        name: "Nicolas Callens",
        role: "Lead Product Designer",
        image: "/landing/company/teams/ncallens-sm.png"
    },
    pgrainger: {
        name: "Paul Grainger",
        role: "Lead Field Engineer",
        image: "/landing/company/teams/pgrainger-sm.png"
    },
    smantri: {
        name: "Shruti Mantri",
        role: "Data Engineer",
        image: "/landing/company/teams/smantri-sm.png"
    },
    wrussell: {
        name: "Will Russell",
        role: "Developer Advocate",
        image: "/landing/company/teams/wrussell-sm.png"
    },
    ycoornaert: {
        name: "Yann Coornaert",
        role: "Software Engineer",
        image: "/landing/company/teams/ycoornaert-sm.png"
    }
}

export const getAuthorData = (authorKey: string): Author | null => {
    return authorsData[authorKey] || null
}

export const getMultipleAuthors = (authorKeys: string[]): Author[] => {
    if (!Array.isArray(authorKeys)) {
        return []
    }

    return authorKeys
        .map(key => authorsData[key])
        .filter((author): author is Author => author !== undefined)
}

export const getAllAuthors = (): AuthorsData => {
    return authorsData
}

export const getAuthorKeys = (): string[] => {
    return Object.keys(authorsData)
}
