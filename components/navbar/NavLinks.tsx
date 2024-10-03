"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/#contact-us" },
  ];
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            pathname === item.href
              ? "text-primary bg-primary/10"
              : "text-foreground hover:text-primary"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
