// import BackgroundElements from "./BackgroundElements";
// import ProfileImage from "./ProfileImage";
// import TechStack from "./TechStack";
//
// function Hero() {
//     return (
//         <section className="relative overflow-hidden">
//             <BackgroundElements />
//
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//
//                     {/* Left Content */}
//                     <div className="text-center lg:text-left">
//             <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4">
//               Backend Developer
//             </span>
//
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//                             Hi, I'm{" "}
//                             <span className="text-gradient">
//                 Wisarut
//               </span>
//                         </h1>
//
//                         <p className="text-xl text-gray-400 mb-8 max-w-lg">
//                             I build{" "}
//                             <span className="font-semibold text-primary">
//                 scalable web apps
//               </span>{" "}
//                             with modern technologies like{" "}
//                             <span className="font-semibold text-secondary">
//                 React, Node.js & MongoDB
//               </span>
//                             .
//                         </p>
//
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                             <a
//                                 href="#projects"
//                                 className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-glow hover:shadow-glow-hover transition-all duration-300"
//                             >
//                                 View My Work
//                             </a>
//
//                             <a
//                                 href="https://th.linkedin.com/in/wisarut-hakaen-beng" target="_blank"
//                                 className="px-8 py-3.5 rounded-lg border-2 border-primary/30 text-gray-300 font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
//                             >
//                                 Linkedin
//                             </a>
//                         </div>
//
//                         <TechStack />
//                     </div>
//
//                     {/* Right Content */}
//                     <ProfileImage />
//
//                 </div>
//             </div>
//         </section>
//     );
// }
//
// export default Hero;

import BackgroundElements from "./BackgroundElements";
import ProfileImage from "./ProfileImage";
import TechStack from "./TechStack";

function Hero() {
    return (
        <section className="relative overflow-hidden">
            <BackgroundElements />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4">
                            Backend Developer
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Hi, I'm <span className="text-gradient">Wisarut</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-lg">
                            I'm a <span className="font-semibold text-primary">Junior Developer</span> passionate about <span className="font-semibold text-secondary">backend and infrastructure</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#projects" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-glow hover:shadow-glow-hover transition-all duration-300">
                                View My Work
                            </a>
                            <a href="https://th.linkedin.com/in/wisarut-hakaen-beng" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-lg border-2 border-primary/30 text-gray-300 font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
                                Linkedin
                            </a>
                        </div>
                        <TechStack />
                    </div>

                    {/* Right Content */}
                    <ProfileImage />
                </div>
            </div>
        </section>
    );
}

export default Hero;