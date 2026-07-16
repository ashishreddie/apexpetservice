import {
  Scissors,
  Home,
  Stethoscope,
  Syringe,
  Activity,
  Pill,
  GraduationCap,
  Footprints,
  LucideIcon,
} from "lucide-react";
import { Service } from "./services";

export const iconMap: Record<Service["icon"], LucideIcon> = {
  scissors: Scissors,
  home: Home,
  stethoscope: Stethoscope,
  syringe: Syringe,
  activity: Activity,
  pill: Pill,
  "graduation-cap": GraduationCap,
  footprints: Footprints,
};
