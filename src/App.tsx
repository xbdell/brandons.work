import ProjectSlide from "./components/ProjectSlide";
import TerminalPageIndicator from "./components/TerminalPageIndicator";
import CFButton from "./components/CFButton";
import ContactForm from "./components/ContactForm";
import projects from "./Projects";

function App() {
    const currentProjects = projects;

    return (
        <div className="bg-base-100 min-h-screen">
            {/* Hero Section */}
            <section className="technical-hero technical-grid min-h-[700px]">
                <div className="technical-container">
                    <div className="mb-8 md:mb-16">
                        <TerminalPageIndicator pageTitle="SYSTEM.INIT" />
                    </div>

                    <div className="max-w-4xl md:ml-18">
                        <div className="mb-8">
                            <h1 className="font-black tracking-tight">
                                <span className="text-primary block">{`BRANDON'S`}</span>
                                <span className="text-secondary block">
                                    WORK
                                </span>
                            </h1>
                        </div>

                        <div className="card mb-12 max-w-3xl p-8">
                            <p className="text-neutral text-lg leading-relaxed">
                                {`With over a decade of experience crafting digital experiences, 
                                I bring deep expertise in front-end engineering to every project. 
                                From nimble startups to enterprise environments, I've led teams, 
                                architected solutions, and delivered products that make a difference.`}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <CFButton
                                url="https://www.linkedin.com/in/b-demello"
                                label="LINKEDIN"
                            />
                            <CFButton
                                url="https://github.com/xbdell/"
                                label="GITHUB"
                                variant="secondary"
                            />
                            <CFButton
                                url="https://medium.com/@bdemello.dev"
                                label="MEDIUM"
                                variant="secondary"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="technical-section bg-base-200">
                <div className="technical-container">
                    <div className="mb-8 flex">
                        <TerminalPageIndicator pageTitle="PROJECTS.DISPLAY" />
                    </div>
                    <div className="mb-12">
                        <h2 className="text-center">
                            <span className="text-primary">PRO</span>
                            <span className="text-secondary">JECTS</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {currentProjects.map((project, index) => (
                            <ProjectSlide
                                key={`project-${index}`}
                                index={index}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="technical-section bg-base-100">
                <div className="technical-container">
                    <div className="mb-8 flex items-center justify-between">
                        <TerminalPageIndicator pageTitle="CONTACT.INTERFACE" />
                    </div>

                    <div className="mb-12">
                        <h2 className="text-center">
                            <span className="text-primary">CON</span>
                            <span className="text-secondary">TACT</span>
                        </h2>
                    </div>

                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="technical-section border-base-300 border-t">
                <div className="technical-container">
                    <div className="text-neutral flex items-center justify-between text-sm">
                        <div className="font-mono">{`© 2025 BRANDON'S WORK`}</div>
                        <div className="flex items-center gap-2">
                            <div className="technical-indicator active"></div>
                            <span className="font-mono text-xs">
                                SYSTEM.ONLINE
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
