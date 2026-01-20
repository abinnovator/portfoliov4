import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileSidebar = () => {
  // Common styling for links to keep code DRY
  const linkStyles =
    "text-lg font-medium text-white/70 transition-colors hover:text-white hover:pl-2 duration-200";

  return (
    <Sheet>
      <SheetTrigger className="hover:opacity-75 transition">
        <Menu className="size-6 text-white" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#131313] border-white/10 text-white"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="text-white text-2xl font-bold border-b border-white/10 pb-4">
            Aadit Bhambri
          </SheetTitle>
          <nav className="flex flex-col gap-6 mt-10">
            <Link href="/" className={linkStyles}>
              Home
            </Link>
            <Link href="/work" className={linkStyles}>
              Work
            </Link>
            <Link href="/contact" className={linkStyles}>
              Contact
            </Link>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
