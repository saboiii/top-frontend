import fs from 'fs/promises';
import path from 'path';
import { OG, initializeAllOG, SubOG } from '../models/OG.js';
const DATA_FILE = path.join(process.cwd(), 'data', 'og-data.json');


function serializeOGs(ogs) {
    return ogs.map(og => ({
        name: og.name,
        title: og.title,
        subOGs: og.subOGs.map(subOG => ({
            subOGName: subOG.subOGName,
            cards: subOG.cards,
            lastCardEarnedAt: subOG.lastCardEarnedAt ? subOG.lastCardEarnedAt.toISOString() : ''
        }))
    }));
}

function deserializeOGs(data) {
    return data.map(serializedOG => {
        const og = new OG(serializedOG.name, serializedOG.title);

        serializedOG.subOGs.forEach(serializedSubOG => {
            const subOG = new SubOG(serializedSubOG.subOGName);

            serializedSubOG.cards.forEach(card => {
                subOG.addCard(card);
            });

            if (serializedSubOG.lastCardEarnedAt !== '') {
                subOG.lastCardEarnedAt = new Date(serializedSubOG.lastCardEarnedAt);
            }

            og.subOGs.push(subOG);
        });

        return og;
    });
}

export async function saveOGData(ogs) {
    try {
        await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
        const serializedData = serializeOGs(ogs);
        await fs.writeFile(DATA_FILE, JSON.stringify(serializedData, null, 2));
    } catch (error) {
        console.error('Error saving OG data:', error);
    }
}

export async function loadOGData() {
    try {
        const fileData = await fs.readFile(DATA_FILE, 'utf-8');
        const savedData = JSON.parse(fileData);
        return deserializeOGs(savedData);
    } catch (error) {
        console.log('No saved data found, initializing fresh data');
        const freshOGs = initializeAllOG();
        await saveOGData(freshOGs);
        return freshOGs;
    }
}
