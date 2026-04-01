import CFButton from "./CFButton";
import { Project } from "src/Projects";

interface ProjectSlideProps {
    index: number;
    project: Project;
}

function ProjectSlide({ index, project }: ProjectSlideProps) {
    return (
        <div className="border-base-300 relative overflow-hidden border bg-white">
            <div className="text-technical-gray border-base-300 absolute top-4 right-4 border bg-white px-2 py-0.5 font-mono text-xs font-semibold tracking-widest">
                {String(index + 1).padStart(3, "0")}
            </div>

            <div className="flex h-full flex-col">
                {/* Project Image/Placeholder */}
                <div className="bg-base-200 border-base-300 relative h-48 overflow-hidden border-b">
                    {project.previewImageUrl ? (
                        <img
                            src={project.previewImageUrl}
                            alt={project.name}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="from-base-200 to-base-300 flex h-full items-center justify-center bg-gradient-to-br">
                            <div className="text-neutral font-mono text-6xl font-bold opacity-20">
                                {project.name.charAt(0)}
                            </div>
                        </div>
                    )}

                    {/* Technical overlay */}
                </div>

                {/* Project Content */}
                <div className="flex flex-grow flex-col p-6">
                    <div className="mb-3">
                        <h3 className="font-sans text-lg font-bold tracking-tight text-black uppercase">
                            {project.name}
                        </h3>
                    </div>

                    <p className="text-technical-gray mb-6 flex-grow text-sm leading-relaxed font-normal">
                        {project.description}
                    </p>

                    {/* Technical divider */}
                    <div className="bg-border my-8 h-px w-full"></div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-3">
                        {project.liveLink && (
                            <CFButton
                                variant="secondary"
                                url={project.liveLink.href}
                                label={project.liveLink.displayText}
                                buttonType="primary"
                            />
                        )}
                        <CFButton
                            variant="secondary"
                            url={project.repoLink.href}
                            label={project.repoLink.displayText}
                            buttonType="secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;
