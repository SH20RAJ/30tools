import Link from "next/link";
import gamesData from "@/constants/games.json";
import GameClient from "./GameClient";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const game = gamesData.games.find(g => g.id === id);

    if (!game) {
        return {
            title: "Game Not Found | 30Games",
            description: "The requested game could not be found."
        };
    }

    return {
        title: `${game.name} - Play Free Online | 30Games`,
        description: game.description,
        keywords: [...game.tags, "free online games", "html5 games", "browser games"],
        openGraph: {
            title: `${game.name} - Play Free Online`,
            description: game.description,
            type: "website",
            images: [
                {
                    url: `/games/thumbnails/${game.id}.jpg`, // Assuming thumbnails exist or will exist
                    width: 1200,
                    height: 630,
                    alt: game.name,
                }
            ],
        },
    };
}

export default async function GamePage({ params }) {
    const { id } = await params;
    const game = gamesData.games.find(g => g.id === id);

    if (!game) {
        return (
            <div className="games-container" style={styles.loading}>
                <h1>Game not found</h1>
                <Link href="/games" style={styles.backLink}>← Back to Games</Link>
            </div>
        );
    }

    const category = gamesData.categories[game.category];

    // Find related games from same category
    const relatedGames = gamesData.games
        .filter(g => g.category === game.category && g.id !== game.id)
        .slice(0, 4);

    return (
        <>
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Game",
                        name: game.name,
                        description: game.description,
                        genre: category.name,
                        gamePlatform: "Web Browser",
                        playMode: "SinglePlayer",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: game.rating,
                            ratingCount: parseInt(game.plays.replace(/[^0-9]/g, "")) || 100,
                            bestRating: "5",
                            worstRating: "1",
                        },
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "USD",
                        },
                    }),
                }}
            />

            <GameClient game={game} category={category} relatedGames={relatedGames} />
        </>
    );
}

const styles = {
    loading: {
        textAlign: "center",
        padding: "4rem 0",
    },
    backLink: {
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "1.1rem",
        fontWeight: "600",
    },
};