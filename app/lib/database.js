// This file provides access to the singleton OG data

import { saveOGData, loadOGData } from './database-helper.js';

// Singleton OG data
let allOGs = [];
let IS_INITIALIZED = false;

// --------- Initialize data --------
// This function is called in /instrument.ts
export async function initializeData() {
    allOGs = await loadOGData();
    IS_INITIALIZED = true;
    console.log("Data store initialized");
}

export function isDataInitialized() {
    return IS_INITIALIZED;
}

// --------- Getters and Setters --------
export function getAllOGs() {
    return allOGs;
}

export function getAllSubOGs() {
    return allOGs.flatMap(og => og.subOGs);
}

export function findSubOG(subOGName) {
    return getAllSubOGs().find(subOG => subOG.subOGName === subOGName);
}

// ----------- Sorting -----------
export function sortSubOGsByCardCount(subOGs) {
    return [...subOGs].sort((a, b) => b.cards.length - a.cards.length);
}

// ----------- Card Management -----------
export async function assignCardToSubOG(subOGName, card) {
    const subOG = findSubOG(subOGName);
    if (subOG) {
        subOG.addCard(card);
        await saveOGData(allOGs);
        return true;
    }
    return false;
}

export async function removeCardFromSubOG(subOGName, card) {
    const subOG = findSubOG(subOGName);
    if (subOG) {
        subOG.removeCard(card);
        await saveOGData(allOGs);
        return true;
    }
    return false;
}
