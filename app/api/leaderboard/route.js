import { getAllOGs, getAllSubOGs, assignCardToSubOG, sortSubOGsByCardCount, initializeData, isDataInitialized } from '@/app/lib/database';
import { NextResponse } from 'next/server';


export async function GET() {
    if (!isDataInitialized()) {
        await initializeData();
    }

    const response = {
        ogs: getAllOGs().map(og => ({
            name: og.name,
            title: og.title,
            subOGs: og.subOGs.map(subOG => ({
                name: subOG.subOGName,
                cardCount: subOG.cards.length,
                lastCardEarnedAt: subOG.lastCardEarnedAt,
                cards: subOG.cards
            }))
        })),
        leaderboard: sortSubOGsByCardCount(getAllSubOGs()).map(subOG => ({
            name: subOG.subOGName,
            cardCount: subOG.cards.length,
            lastCardEarnedAt: subOG.lastCardEarnedAt
        }))
    };

    return NextResponse.json(response);
}

export async function POST(request) {
    const body = await request.json();
    const { subOGName, card } = body;

    if (!subOGName || !card) {
        return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
        );
    }

    await assignCardToSubOG(subOGName, card);

    return NextResponse.json({ success: true });
}
