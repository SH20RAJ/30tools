"use client";

import { useState } from "react";
import Link from "next/link";

export default function GameClient({ game, category, relatedGames }) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((e) => {
                console.error(`Error attempting to enable fullscreen mode: ${e.message} (${e.name})`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <div className="games-container">
            {/* Breadcrumb */}
            <div style={styles.breadcrumb}>
                <Link href="/games" style={styles.breadcrumbLink}>Games</Link>
                <span style={styles.breadcrumbSep}>/</span>
                <Link href={`/games?category=${game.category}`} style={styles.breadcrumbLink}>
                    {category.name}
                </Link>
                <span style={styles.breadcrumbSep}>/</span>
                <span style={styles.breadcrumbCurrent}>{game.name}</span>
            </div>

            {/* Game Header */}
            <div style={styles.header}>
                <div style={styles.headerLeft}>
                    <div style={styles.gameIconLarge}>{category.icon}</div>
                    <div>
                        <h1 style={styles.gameTitle}>{game.name}</h1>
                        <div style={styles.gameMeta}>
                            <span style={styles.category}>{category.name}</span>
                            <span style={styles.rating}>⭐ {game.rating}</span>
                            <span style={styles.plays}>👥 {game.plays}</span>
                            <span style={styles.difficulty}>
                                {game.difficulty === "easy" && "🟢 Easy"}
                                {game.difficulty === "medium" && "🟡 Medium"}
                                {game.difficulty === "hard" && "🔴 Hard"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Player */}
            <div style={isFullscreen ? styles.playerFullscreen : styles.playerContainer}>
                <iframe
                    src={game.iframe}
                    style={styles.iframe}
                    frameBorder="0"
                    allowFullScreen
                    title={game.name}
                />
                <div style={styles.playerControls}>
                    <button
                        onClick={toggleFullscreen}
                        style={styles.fullscreenBtn}
                    >
                        {isFullscreen ? "Exit Fullscreen" : "⛶ Fullscreen"}
                    </button>
                    <button
                        onClick={() => window.location.reload()}
                        style={styles.refreshBtn}
                    >
                        🔄 Restart Game
                    </button>
                </div>
            </div>

            {/* Game Info */}
            <div style={styles.infoSection}>
                <h2 style={styles.sectionTitle}>About {game.name}</h2>
                <p style={styles.description}>{game.description}</p>

                <div style={styles.tagsContainer}>
                    <h3 style={styles.tagsTitle}>Tags:</h3>
                    <div style={styles.tags}>
                        {game.tags.map(tag => (
                            <span key={tag} style={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div style={styles.howToPlay}>
                    <h3 style={styles.howToTitle}>How to Play</h3>
                    <ul style={styles.howToList}>
                        <li>Use your mouse or touch screen to interact with the game</li>
                        <li>Follow the on-screen instructions</li>
                        <li>Click the fullscreen button for the best experience</li>
                        <li>Have fun and enjoy the game!</li>
                    </ul>
                </div>
            </div>

            {/* Related Games */}
            {relatedGames.length > 0 && (
                <div style={styles.relatedSection}>
                    <h2 style={styles.sectionTitle}>More {category.name}</h2>
                    <div style={styles.relatedGrid}>
                        {relatedGames.map(relatedGame => (
                            <Link
                                key={relatedGame.id}
                                href={`/games/${relatedGame.id}`}
                                style={styles.relatedCard}
                            >
                                <div style={styles.relatedIcon}>{category.icon}</div>
                                <h3 style={styles.relatedName}>{relatedGame.name}</h3>
                                <div style={styles.relatedMeta}>
                                    <span>⭐ {relatedGame.rating}</span>
                                    <span>{relatedGame.plays}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Back to Games */}
            <div style={styles.backContainer}>
                <Link href="/games" style={styles.backButton}>
                    ← Back to All Games
                </Link>
            </div>
        </div>
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
    breadcrumb: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "2rem",
        fontSize: "0.9rem",
    },
    breadcrumbLink: {
        color: "rgba(255, 255, 255, 0.8)",
        textDecoration: "none",
        transition: "color 0.3s",
    },
    breadcrumbSep: {
        color: "rgba(255, 255, 255, 0.5)",
    },
    breadcrumbCurrent: {
        color: "#ffffff",
        fontWeight: "600",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "2rem",
    },
    headerLeft: {
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
    },
    gameIconLarge: {
        fontSize: "4rem",
    },
    gameTitle: {
        fontSize: "2.5rem",
        fontWeight: "800",
        marginBottom: "0.75rem",
        color: "#ffffff",
    },
    gameMeta: {
        display: "flex",
        gap: "1.5rem",
        fontSize: "0.95rem",
    },
    category: {
        padding: "0.25rem 0.75rem",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        fontWeight: "600",
    },
    rating: {
        fontWeight: "600",
    },
    plays: {
        color: "rgba(255, 255, 255, 0.8)",
    },
    difficulty: {
        fontWeight: "600",
    },
    playerContainer: {
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "1rem",
        border: "3px solid rgba(255, 255, 255, 0.2)",
    },
    playerFullscreen: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        background: "#000",
        display: "flex",
        flexDirection: "column",
    },
    iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        flexGrow: 1,
    },
    playerControls: {
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        position: "relative",
        zIndex: 10000,
        padding: "1rem",
    },
    fullscreenBtn: {
        padding: "0.75rem 1.5rem",
        background: "linear-gradient(45deg, #667eea, #764ba2)",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "700",
        cursor: "pointer",
        transition: "transform 0.2s",
    },
    refreshBtn: {
        padding: "0.75rem 1.5rem",
        background: "rgba(255, 255, 255, 0.1)",
        color: "#ffffff",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s",
    },
    infoSection: {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        padding: "2rem",
        marginBottom: "2rem",
    },
    sectionTitle: {
        fontSize: "1.75rem",
        fontWeight: "700",
        marginBottom: "1rem",
        color: "#ffffff",
    },
    description: {
        fontSize: "1.1rem",
        lineHeight: "1.7",
        color: "rgba(255, 255, 255, 0.9)",
        marginBottom: "2rem",
    },
    tagsContainer: {
        marginBottom: "2rem",
    },
    tagsTitle: {
        fontSize: "1.1rem",
        fontWeight: "600",
        marginBottom: "0.75rem",
    },
    tags: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
    },
    tag: {
        padding: "0.5rem 1rem",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
        fontSize: "0.9rem",
        fontWeight: "600",
    },
    howToPlay: {
        marginTop: "2rem",
    },
    howToTitle: {
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "1rem",
    },
    howToList: {
        paddingLeft: "1.5rem",
        lineHeight: "2",
        fontSize: "1rem",
        color: "rgba(255, 255, 255, 0.9)",
    },
    relatedSection: {
        marginBottom: "3rem",
    },
    relatedGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1.5rem",
    },
    relatedCard: {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        padding: "1.5rem",
        textDecoration: "none",
        color: "#ffffff",
        transition: "all 0.3s",
        cursor: "pointer",
        textAlign: "center",
    },
    relatedIcon: {
        fontSize: "2.5rem",
        marginBottom: "1rem",
    },
    relatedName: {
        fontSize: "1.1rem",
        fontWeight: "700",
        marginBottom: "0.75rem",
    },
    relatedMeta: {
        display: "flex",
        justifyContent: "space-around",
        fontSize: "0.85rem",
        color: "rgba(255, 255, 255, 0.8)",
    },
    backContainer: {
        textAlign: "center",
        marginTop: "3rem",
    },
    backButton: {
        display: "inline-block",
        padding: "1rem 2rem",
        background: "rgba(255, 255, 255, 0.1)",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "12px",
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "1.1rem",
        fontWeight: "600",
        transition: "all 0.3s",
    },
};
