import React, { useState } from "react";
import { Button } from "@mui/material";
import { Dialog, DialogTitle, DialogPanel, Transition } from "@headlessui/react";
import {
  CpuIcon,
  CodeIcon,
  ServerIcon,
} from "../helper/IconHelper";

export default function Project() {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      title: "OS Project",
      description: "Developing a custom operating system from scratch, focusing on performance and security.",
      link:"",
      icon: <CpuIcon className="h-6 w-6" />,
    },
    {
      title: "Kernel Project",
      description: "Designing and implementing a new kernel architecture for improved scalability and reliability.",
      link:"",
      icon: <CpuIcon className="h-6 w-6" />,
    },
    {
      title: "Frontend Project",
      description: "Building a modern, responsive web application with the latest frontend technologies.",
      link:"",
      icon: <CodeIcon className="h-6 w-6" />,
    },
    {
      title: "Backend Project",
      description: "Developing a scalable and secure backend system to power our web applications.",
      link:"",
      icon: <ServerIcon className="h-6 w-6" />,
    },
    {
      title: "Electronic Project",
      description: "Designing and building custom electronic devices for various applications.",
      link:"",
      icon: <CpuIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-x-auto snap-x snap-mandatory mt-12">
          <div className="flex gap-6 snap-x snap-mandatory">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start w-[300px] rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="Project Image"
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: "400/300", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsOpen(true)}
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-md bg-primary p-3 text-primary-foreground">
                        {project.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
          {/* Dialog content */}
        </Dialog>
      </Transition>
    </section>
  );
}
