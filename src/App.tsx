import ProjectSlide from "./components/ProjectSlide";
import TerminalPageIndicator from "./components/TerminalPageIndicator";
import CFButton from "./components/CFButton";
import ContactForm from "./components/ContactForm";
import projects from "./Projects";

function App() {
    const currentProjects = projects;

    return (
        <div className="m-0 h-screen min-h-screen bg-zinc-50 p-0 py-24 font-normal text-black">
            {/* Hero Section */}
            <section className="relative h-screen min-h-screen bg-zinc-50">
                <div className="mx-auto max-w-[1200px] px-4">
                    <div className="mb-8 md:mb-16">
                        <TerminalPageIndicator pageTitle="SYSTEM.INIT" />
                    </div>

                    <div className="max-w-4xl md:ml-[4.5rem]">
                        <div className="mb-8">
                            <h1 className="text-6xl font-black tracking-tight">
                                <span className="block text-black">{`BRANDON'S`}</span>
                                <span className="block text-blue-500">
                                    WORK
                                </span>
                            </h1>
                        </div>

                        <div className="mb-12 max-w-3xl rounded-none border border-zinc-200 bg-white p-8">
                            <p className="text-lg leading-relaxed text-zinc-500">
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
            <section className="min-h-screen w-full bg-zinc-100 px-4 py-8 text-[40px] font-extrabold md:px-12">
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
            </section>

            {/* Contact Section */}
            <section className="min-h-screen bg-zinc-50 px-4 py-8 md:px-12">
                <div className="mb-8 flex items-center justify-between">
                    <TerminalPageIndicator pageTitle="CONTACT.INTERFACE" />
                </div>

                <div className="mb-6">
                    <h2 className="text-center text-[40px] font-extrabold">
                        <span className="text-primary">CON</span>
                        <span className="text-secondary">TACT</span>
                    </h2>
                </div>

                <ContactForm />
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-200 py-10">
                <div className="w-full px-4 md:px-12">
                    <div className="flex items-center justify-between text-sm text-zinc-500">
                        <div className="font-mono">{`© 2026 BRANDON'S WORK`}</div>
                        <div className="flex items-center gap-2">
                            <div className="block h-2 w-2 bg-blue-500"></div>
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
