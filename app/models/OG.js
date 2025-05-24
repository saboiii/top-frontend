export const OGNames = {
    Ace: "Ace",
    Two: "Two",
    Three: "Three",
    Four: "Four",
    Five: "Five",
    Six: "Six",
    Seven: "Seven",
    Eight: "Eight",
    Nine: "Nine",
    Ten: "Ten",
    Jack: "Jack",
    Queen: "Queen",
    King: "King"
};

// Mapping of OG to their titles
export const OG_TITLES = {
    [OGNames.Ace]: "The High Ace",
    [OGNames.Two]: "Double Deuce",
    [OGNames.Three]: "Triple Threat",
    [OGNames.Four]: "Fourfold Fury",
    [OGNames.Five]: "Five of Fortune",
    [OGNames.Six]: "Sixth Sense",
    [OGNames.Seven]: "Seventh Heaven",
    [OGNames.Eight]: "Eighth Fate",
    [OGNames.Nine]: "Cloud Nine",
    [OGNames.Ten]: "Decade Dominion",
    [OGNames.Jack]: "Jester's Play",
    [OGNames.Queen]: "Regal Majesty",
    [OGNames.King]: "Crowned Conqueror"
};

export class SubOG {
    constructor(subOGName) {
        this.subOGName = subOGName;
        this._cards = [];
        this.lastCardEarnedAt = null;
    }

    get cards() {
        return [...this._cards];
    }

    addCard(card) {
        this._cards.push(card);
        this.lastCardEarnedAt = new Date();
    }

    removeCard(card) {
        const index = this._cards.findIndex(c => c === card);
        if (index !== -1) {
            this._cards.splice(index, 1);
        }
    }
}

export class OG {
    constructor(name, title = OG_TITLES[name]) {
        this.name = name;
        this.title = title;
        this.subOGs = [];
    }

    createNewSubOG(name) {
        const subOG = new SubOG(name);
        this.subOGs.push(subOG);
        return subOG;
    }
}

// Initialize all OGs with their titles and sub-OGs
export function initializeAllOG() {
    const ogs = [];

    // Create OG instances
    Object.values(OGNames).forEach(ogName => {
        const og = new OG(ogName, OG_TITLES[ogName]);
        ogs.push(og);
    });

    ogs.forEach(og => {
        const subOGCount = 4; // Currently, each OG has 4 sub-OGs
        for (let i = 1; i <= subOGCount; i++) {
            const subOGName = `${og.name} ${i}`;
            og.createNewSubOG(subOGName);
        }
    });

    return ogs;
}
