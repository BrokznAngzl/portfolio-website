import {useState} from "react";
import PopUp from "./PopUp";

function Project(props) {
    const {project, aosType} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="group bg-darker border border-gray-800 rounded-2xl p-6 shadow-glow
             hover:shadow-glow-hover transition-all duration-300 mb-20 cursor-pointer"
                data-aos={aosType} data-aos-anchor-placement="top-bottom"
                onClick={() => setIsOpen(true)}
            >

                {/* Project Image */}
                <div
                    className="h-40 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 overflow-hidden">
                    {project.images && project.images[0] ? (
                        <img
                            src={project.images[0]}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-gray-500">
            Project Preview
        </span>
                    )}
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-bold mb-3">
                    {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="px-2.5 py-1 text-xs rounded-full bg-dark border border-gray-800 text-gray-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Link */}
                <a
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                >
                    View Project
                    <span className="ml-2">→</span>
                </a>
            </div>

            {/* Modal Popup */}
            {isOpen && (
                <PopUp project={project} onClose={() => setIsOpen(false)}/>
            )}
        </>
    );
}

export default Project;