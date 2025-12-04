import Link from "next/link";
import "./games.css";

export default function GamesLayout({ children }) {
    return (
        <html lang="en">
            <body className="games-body">
                {/* Gaming Header */}
                <header className="games-header">
                    <div className="games-container">
                        <div className="games-nav">
                            <Link href="/games" className="games-logo">
                                <span className="logo-icon">🎮</span>
                                <span className="logo-text">30Games</span>
                            </Link>

                            <nav className="games-menu">
                                <Link href="/games" className="nav-link">
                                    All Games
                                </Link>
                                <Link href="/games?category=puzzle" className="nav-link">
                                    Puzzle
                                </Link>
                                <Link href="/games?category=arcade" className="nav-link">
                                    Arcade
                                </Link>
                                <Link href="/games?category=action" className="nav-link">
                                    Action
                                </Link>
                                <Link href="/games?category=sports" className="nav-link">
                                    Sports
                                </Link>
                                <Link href="/" className="nav-link-home">
                                    Back to Tools
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="games-main">
                    {children}
                </main>

                {/* Gaming Footer */}
                <footer className="games-footer">
                    <div className="games-container">
                        <p>© 2024 30Games - Free HTML5 Games | Part of <Link href="/">30tools.com</Link></p>
                    </div>
                </footer>
            </body>
        </html>
    );
}