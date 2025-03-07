import React, { useState } from "react";
import { Button } from "@mui/material";
import { Dialog, DialogTitle, DialogPanel, Transition } from "@headlessui/react";
import "../index.css";
import { Html } from "@react-three/drei";
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
      icon: <CpuIcon className="h-6 w-6" />,
    },
    {
      title: "Kernel Project",
      description: "Designing and implementing a new kernel architecture for improved scalability and reliability.",
      icon: <CpuIcon className="h-6 w-6" />,
    },
    {
      title: "Frontend Project",
      description: "Building a modern, responsive web application with the latest frontend technologies.",
      icon: <CodeIcon className="h-6 w-6" />,
    },
    {
      title: "Backend Project",
      description: "Developing a scalable and secure backend system to power our web applications.",
      icon: <ServerIcon className="h-6 w-6" />,
    },
    {
      title: "Electronic Project",
      description: "Designing and building custom electronic devices for various applications.",
      icon: <CpuIcon className="h-6 w-6" />,
    },
  ];

  return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container bg-black px-4 md:px-6">
          <div className="relative overflow-x-auto snap-x snap-mandatory mt-12">
            <div className="flex gap-6 snap-x snap-mandatory">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-start w-[300px] rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-[200px] bg-black overflow-hidden rounded-lg">
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
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <DialogTitle as="h3" className="text-xl font-semibold">Project Details</DialogTitle>
                <p className="mt-2 text-sm">
                  This is where you can provide detailed information about the selected project.
                </p>
                <div className="mt-4">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-md"
                  >
                    Close
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </Transition>
      </section>
  );
}
