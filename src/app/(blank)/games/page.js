
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import gamesData from "@/constants/games.json";

export const metadata = {
    title: "Free HTML5 Games - Play 28+ Games Online | 30Games",
    description: "Play 28+ free HTML5 games online! Puzzle, arcade, action, sports, and classic games. No downloads required. Play instantly in your browser!",
    keywords: ["free online games", "HTML5 games", "browser games", "play games online", "puzzle games", "arcade games", "action games"],
};

export default function GamesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");

    const { games, categories } = gamesData;

    // Filter and sort games
    const filteredGames = useMemo(() => {
        let filtered = games;

        // Filter by category
        if (selectedCategory !== "all") {
            filtered = filtered.filter(game => game.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(game =>
                game.name.toLowerCase().includes(query) ||
                game.description.toLowerCase().includes(query) ||
                game.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        // Sort games
        if (sortBy === "featured") {
            filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        } else if (sortBy === "popular") {
            filtered = [...filtered].sort((a, b) => {
                const aPlays = parseInt(a.plays.replace(/[^0-9]/g, ""));
                const bPlays = parseInt(b.plays.replace(/[^0-9]/g, ""));
                return bPlays - aPlays;
            });
        } else if (sortBy === "rating") {
            filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        }

        return filtered;
    }, [games, selectedCategory, searchQuery, sortBy]);

    const featuredGames = games.filter(game => game.featured).slice(0, 6);

    return (
        <div className="games-container">
            {/* Hero Section */}
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>🎮 Free HTML5 Games</h1>
                <p style={styles.heroSubtitle}>
                    Play 28+ amazing games instantly in your browser. No downloads, no registration required!
                </p>
            </div>

            {/* Featured Games */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>⭐ Featured Games</h2>
                <div style={styles.featuredGrid}>
                    {featuredGames.map(game => (
                        <Link key={game.id} href={`/games/${game.id}`} style={styles.featuredCard}>
                            <div style={styles.featuredBadge}>Featured</div>
                            <div style={styles.featuredIcon}>{categories[game.category].icon}</div>
                            <h3 style={styles.featuredName}>{game.name}</h3>
                            <p style={styles.featuredDesc}>{game.description.slice(0, 80)}...</p>
                            <div style={styles.featuredMeta}>
                                <span style={styles.rating}>⭐ {game.rating}</span>
                                <span style={styles.plays}>👥 {game.plays}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Filters and Search */}
            <div style={styles.filtersContainer}>
                <div style={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="🔍 Search games..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={styles.searchInput}
                    />
                </div>

                <div style={styles.categoryFilters}>
                    <button
                        onClick={() => setSelectedCategory("all")}
                        style={{
                            ...styles.categoryBtn,
                            ...(selectedCategory === "all" ? styles.categoryBtnActive : {})
                        }}
                    >
                        All Games
                    </button>
                    {Object.entries(categories).map(([key, cat]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedCategory(key)}
                            style={{
                                ...styles.categoryBtn,
                                ...(selectedCategory === key ? styles.categoryBtnActive : {})
                            }}
                        >
                            {cat.icon} {cat.name}
                        </button>
                    ))}
                </div>

                <div style={styles.sortContainer}>
                    <label style={styles.sortLabel}>Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={styles.sortSelect}
                    >
                        <option value="featured">Featured</option>
                        <option value="popular">Most Popular</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>
            </div>

            {/* Games Grid */}
            <div style={styles.gamesGrid}>
                {filteredGames.map(game => (
                    <Link key={game.id} href={`/games/${game.id}`} style={styles.gameCard}>
                        <div style={styles.gameIcon}>{categories[game.category].icon}</div>
                        <h3 style={styles.gameName}>{game.name}</h3>
                        <p style={styles.gameDesc}>{game.description.slice(0, 100)}...</p>
                        <div style={styles.gameTags}>
                            {game.tags.slice(0, 3).map(tag => (
                                <span key={tag} style={styles.tag}>{tag}</span>
                            ))}
                        </div>
                        <div style={styles.gameMeta}>
                            <span style={styles.rating}>⭐ {game.rating}</span>
                            <span style={styles.plays}>{game.plays}</span>
                        </div>
                        <div style={styles.playBtn}>Play Now →</div>
                    </Link>
                ))}
            </div>

            {filteredGames.length === 0 && (
                <div style={styles.noResults}>
                    <p style={styles.noResultsText}>No games found. Try a different search or category!</p>
                </div>
            )}
        </div>
    );
}

const styles = {
    hero: {
        textAlign: "center",
        padding: "3rem 0",
        marginBottom: "2rem",
    },
    heroTitle: {
        fontSize: "3rem",
        fontWeight: "800",
        marginBottom: "1rem",
        background: "linear-gradient(45deg, #fff, #a8edea)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    heroSubtitle: {
        fontSize: "1.25rem",
        color: "rgba(255, 255, 255, 0.9)",
        maxWidth: "600px",
        margin: "0 auto",
    },
    section: {
        marginBottom: "3rem",
    },
    sectionTitle: {
        fontSize: "2rem",
        fontWeight: "700",
        marginBottom: "1.5rem",
        color: "#ffffff",
    },
    featuredGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem",
    },
    featuredCard: {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        padding: "1.5rem",
        textDecoration: "none",
        color: "#ffffff",
        transition: "all 0.3s",
        position: "relative",
        cursor: "pointer",
    },
    featuredBadge: {
        position: "absolute",
        top: "1rem",
        right: "1rem",
        background: "linear-gradient(45deg, #f093fb, #f5576c)",
        padding: "0.25rem 0.75rem",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "600",
    },
    featuredIcon: {
        fontSize: "3rem",
        marginBottom: "1rem",
    },
    featuredName: {
        fontSize: "1.5rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
    },
    featuredDesc: {
        fontSize: "0.95rem",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "1rem",
        lineHeight: "1.5",
    },
    featuredMeta: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.9rem",
    },
    filtersContainer: {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        padding: "1.5rem",
        marginBottom: "2rem",
    },
    searchBox: {
        marginBottom: "1.5rem",
    },
    searchInput: {
        width: "100%",
        padding: "0.75rem 1rem",
        fontSize: "1rem",
        borderRadius: "12px",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        background: "rgba(255, 255, 255, 0.1)",
        color: "#ffffff",
        outline: "none",
    },
    categoryFilters: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginBottom: "1.5rem",
    },
    categoryBtn: {
        padding: "0.5rem 1rem",
        borderRadius: "20px",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        background: "rgba(255, 255, 255, 0.1)",
        color: "#ffffff",
        fontSize: "0.9rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s",
    },
    categoryBtnActive: {
        background: "rgba(255, 255, 255, 0.3)",
        borderColor: "#ffffff",
    },
    sortContainer: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    sortLabel: {
        fontSize: "0.95rem",
        fontWeight: "600",
    },
    sortSelect: {
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        background: "rgba(255, 255, 255, 0.1)",
        color: "#ffffff",
        fontSize: "0.9rem",
        cursor: "pointer",
    },
    gamesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1.5rem",
    },
    gameCard: {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        padding: "1.5rem",
        textDecoration: "none",
        color: "#ffffff",
        transition: "all 0.3s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
    },
    gameIcon: {
        fontSize: "2.5rem",
        marginBottom: "1rem",
    },
    gameName: {
        fontSize: "1.25rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
    },
    gameDesc: {
        fontSize: "0.9rem",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "1rem",
        lineHeight: "1.5",
        flexGrow: 1,
    },
    gameTags: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1rem",
    },
    tag: {
        padding: "0.25rem 0.75rem",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.2)",
        fontSize: "0.75rem",
        fontWeight: "600",
    },
    gameMeta: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.85rem",
        marginBottom: "1rem",
    },
    rating: {
        fontWeight: "600",
    },
    plays: {
        color: "rgba(255, 255, 255, 0.7)",
    },
    playBtn: {
        textAlign: "center",
        padding: "0.75rem",
        background: "linear-gradient(45deg, #667eea, #764ba2)",
        borderRadius: "8px",
        fontWeight: "700",
        fontSize: "0.95rem",
    },
    noResults: {
        textAlign: "center",
        padding: "3rem",
    },
    noResultsText: {
        fontSize: "1.25rem",
        color: "rgba(255, 255, 255, 0.7)",
    },
};