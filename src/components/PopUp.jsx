import { useRef, useEffect, useState } from "react";

function PopUp({ project, onClose }) {
    const modalRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });

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

    // Reset zoom/position whenever the image changes
    useEffect(() => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    }, [currentImage]);

    const images = project.images || [];

    const goToPrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 4));
    const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));
    const resetZoom = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.15 : 0.15;
        setZoom((z) => Math.min(Math.max(z + delta, 1), 4));
    };

    const handleMouseDown = (e) => {
        if (zoom <= 1) return;
        isDragging.current = true;
        dragStart.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        setPosition({
            x: e.clientX - dragStart.current.x,
            y: e.clientY - dragStart.current.y,
        });
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const renderMedia = () => {
        if (project.type === "iframe" && project.video) {
            return (
                <div className="relative mb-6 rounded-xl overflow-hidden h-[60vh] bg-dark">
                    <iframe
                        src={project.video}
                        title={project.name}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            );
        }

        if (project.type === "image" && images.length > 0) {
            return (
                <div
                    className="relative mb-6 rounded-xl overflow-hidden h-[60vh] bg-dark select-none"
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <img
                        src={images[currentImage]}
                        alt={`${project.name} screenshot ${currentImage + 1}`}
                        className={`w-full h-full object-contain transition-transform duration-150 ${
                            zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                        }`}
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                        }}
                        draggable={false}
                        onClick={() => zoom === 1 && zoomIn()}
                    />

                    {/* Zoom Controls */}
                    <div className="absolute top-2 right-2 flex gap-1.5 bg-black/50 rounded-lg p-1">
                        <button
                            onClick={zoomOut}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 rounded"
                        >
                            −
                        </button>
                        <button
                            onClick={resetZoom}
                            className="px-2 h-8 flex items-center justify-center text-white text-xs hover:bg-white/20 rounded"
                        >
                            {Math.round(zoom * 100)}%
                        </button>
                        <button
                            onClick={zoomIn}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 rounded"
                        >
                            +
                        </button>
                    </div>

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
            );
        }

        return null;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div
                ref={modalRef}
                className="bg-darker border border-gray-800 rounded-2xl p-8 max-w-5xl aspect-video w-full shadow-glow relative"
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                    onClick={onClose}
                >
                    ✕
                </button>

                {renderMedia()}

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