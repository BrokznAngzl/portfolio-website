function TechStack() {
    const technologies = [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Python",
    ];

    return (
        <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
            {technologies.map((technology) => (
                <span
                    key={technology}
                    className="px-3 py-1 text-sm rounded-full bg-dark border border-gray-800"
                >
          {technology}
        </span>
            ))}
        </div>
    );
}

export default TechStack;