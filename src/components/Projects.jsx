import Project from "./Project";
import projectsJsonData from "../data/projects.json";

function Projects() {
    const aosClasses = ['fade-up-right', 'fade-up-left'];

    return (
        <section
            id="projects"
            className="relative py-20 md:py-28 bg-dark"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="sticky top-0 z-20 text-center mb-12 bbg-grey/95 backdrop-blur-md py-4 rounded-xl">
          <span
              className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4">
            My Work
          </span>

                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Personal{" "}
                        <span className="text-gradient">
              Projects
            </span>
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Projects I've built while learning, experimenting, and growing as a developer.
                    </p>
                </div>

                {/* Project List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
                    {projectsJsonData.map((project, index) => {
                        const classIndex = index % aosClasses.length;
                        return (
                            <Project
                                key={index}
                                project={project}
                                aosType={aosClasses[classIndex]}
                            />
                        );
                    })}
                </div>

                {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"*/}
                {/*     data-aos="fade-up" data-aos-anchor-placement="top-bottom">*/}
                {/*    {projectsJsonData.map((project) => (*/}
                {/*        <Project*/}
                {/*            key={project.name}*/}
                {/*            project={project}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}

            </div>
        </section>
    );
}

export default Projects;