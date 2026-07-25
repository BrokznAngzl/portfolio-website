function Footer() {
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/BrokznAngzl", icon: "🔗" },
        { name: "LinkedIn", url: "#", icon: "💼" },
        { name: "Email", url: "mailto:your-email@example.com", icon: "✉️" },
    ];

    return (
        <footer className="relative bg-darker border-t border-gray-800 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left: Name / Brand */}
                    <div className="text-center md:text-left">
                        <span className="text-lg font-bold text-gradient">
                            Wisarut
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                            Backend Developer
                        </p>
                    </div>

                    {/* Center: Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right: Copyright */}
                    <div className="text-sm text-gray-500 text-center md:text-right">
                        © {new Date().getFullYear()} Wisarut. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;