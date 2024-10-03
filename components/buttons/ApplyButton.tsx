"use client"
import { Linkedin } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function ApplyButton({linkedInUrl}: {linkedInUrl: string}) {
  return (
    <Button
      variant="default"
      className="w-full sm:w-1/2"
      onClick={() => window.open(linkedInUrl, "_blank")}
    >
      <Linkedin className="w-4 h-4 mr-2" />
      Apply via LinkedIn
    </Button>
  );
}
