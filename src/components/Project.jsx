import {useState} from "react";
import PopUp from "./PopUp";

function Project(props) {
    const {project, aosType} = props;
    const [isOpen, setIsOpen] = useState(false);

    function renderLink() {
        if (project.link) {
            return (
                <a
                    href={project.link} target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                >
                    {project.linkType}
                    <span className="ml-2">→</span>
                </a>
            )
        } else {
            return (
                <a
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                >
                    <span className="ml-2"></span>
                </a>
            )
        }
    }

    return (
        <>
            <div data-aos={aosType} data-aos-anchor-placement="top-bottom">
                <div
                    className="group bg-darker border border-gray-800 rounded-2xl p-6 shadow-glow
                    hover:shadow-glow-hover hover:scale-105 transition-all duration-300 mb-16 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    {/* Project Image */}
                    <div
                        className="w-full aspect-video rounded-xl bg-gradient-to-br from-gray-700/40 to-dark/40
                        flex items-center justify-center mb-6 overflow-hidden"
                    >
                        <img
                            src={project.preview}
                            alt={project.name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Project Name */}
                    <h3 className="text-xl font-bold mb-3">
                        {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-5 mb-5 h-[2.5rem] flex items-end line-clamp-2">
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
                    {renderLink()}

                </div>
            </div>

            {/* Modal Popup */}
            {isOpen && (
                <PopUp project={project} onClose={() => setIsOpen(false)}/>
            )}
        </>
    );
}

export default Project;