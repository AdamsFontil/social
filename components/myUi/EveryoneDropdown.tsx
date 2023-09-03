"use client"

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "../../node_modules/lucide-react"


const EveryoneDropdown: React.FC<{
  ButtonTitle: string;
  DropdownTitle: string;
  Choice1: string;
  Choice2: string;
  Choice3: string;
}> = ({ ButtonTitle, DropdownTitle, Choice1, Choice2, Choice3 }) => {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sky-500 w-fit rounded-full px-6 py-0 m-0 text-sm" asChild>
        <Button variant="outline">{ButtonTitle} < ChevronDown /> </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{DropdownTitle}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">{Choice1}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">{Choice2}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">{Choice3} </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default EveryoneDropdown
