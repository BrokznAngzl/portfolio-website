import { useRef, useEffect, useState } from "react";

function PopUp({ project, onClose }) {
    const modalRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const images = project.images || [];

    const goToPrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div
                ref={modalRef}
                className="bg-darker border border-gray-800 rounded-2xl p-8 max-w-4xl aspect-video w-full shadow-glow relative"
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* Image Slider */}
                {images.length > 0 && (
                    <div className="relative mb-6 rounded-xl overflow-hidden h-64 bg-dark">
                        <img
                            src={images[currentImage]}
                            alt={`${project.name} screenshot ${currentImage + 1}`}
                            className="w-full h-full object-cover"
                        />

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={goToPrev}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                >
                                    ›
                                </button>

                                {/* Dots Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImage(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${
                                                index === currentImage ? "bg-primary" : "bg-gray-500"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

                <h3 className="text-2xl font-bold mb-4">
                    {project.name}
                </h3>

                <p className="text-gray-400 mb-5">
                    {project.description}
                </p>

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

                <a
                    href={project.link}
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                >
                    View Project
                    <span className="ml-2">→</span>
                </a>
            </div>
        </div>
    );
}

export default PopUp;