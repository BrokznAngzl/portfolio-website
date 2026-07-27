function TechStack() {
    const technologies = [
        "Java",
        "Spring Boot",
        "React.js",
        "Tailwind CSS",
        "Python",
        "C",
        // "Openshift",
        // "K8s",
        // "Docker",
        // "Nginx"
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