import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}