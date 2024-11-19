import React from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



function ProjectCard({ project }) {
    return (
        <div
            className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
            key={project.id}
        >
            <a
                href={project.link || project.github}
                target="_blank"
                className={`w-full relative rounded-xl border-[#7b89a8] border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-[#00c7ff] will-change-projectCard`}
            >
                <Image
                    className="w-full rounded-md"
                    src={project.img}
                    alt="img"
                    width={366} height={179}
                />
            </a>
            <div className="w-full mt-5">
                <div className="flex projects-center justify-between">
                    <a href={project.link || project.github} target="_blank">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                    </a>
                    <div className="space-x-2">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <Image
                                    src="/icons/external-link.svg"
                                    width={16}
                                    height={16}
                                    alt="Link Icon"
                                />
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <Image
                                    src="/icons/github.svg"
                                    width={16}
                                    height={16}
                                    alt="Github Icon"
                                />
                            </a>
                        )}
                        {project.gal && (
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                    src="/icons/external-link.svg"
                                    width={16}
                                    height={16}
                                    alt="Link Icon"
                                /></DialogTrigger>
                                <DialogContent>
                                    <Carousel>
                                        <CarouselContent>
                                            {project.gal.map((pic, index) => {
                                                return (
                                                    <CarouselItem key={pic}>
                                                        <Image
                                                            className="w-full rounded-md"
                                                            src={pic}
                                                            alt="img"
                                                            width={462} height={220}
                                                        />
                                                    </CarouselItem>

                                                );
                                            })}

                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>

                                </DialogContent>
                            </Dialog>



                        )}
                    </div>
                </div>
                <p className="text-[#7b89a8] text-left text-sm">{project.desc}</p>
                <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
                    {project.tags.map((tag, index) => {
                        return (
                            <li key={tag}>

                                <div className="m-1 rounded-lg text-sm bg-[#192742] py-1 px-2 cursor-pointer hover:opacity-75">
                                    {tag}
                                </div>

                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;
