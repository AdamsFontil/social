import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const years = Array.from({ length: 100 }, (_, i) => (2023 - i).toString());

export function DateOfBirthSelection() {

  return (
    <div className="flex gap-5 z-50">
      <Select>
<SelectTrigger className="w-[360px]">
  <SelectValue placeholder="Month" />
</SelectTrigger>

<SelectContent>
  <SelectGroup>
    <SelectLabel>Month</SelectLabel>
    <ScrollArea className="h-72 W-full rounded-md ">
      <div className="p-4">
    {months.map((month) => (
      <SelectItem key={month} value={month}>
        {month}
      </SelectItem>
    ))}
</div>
    </ScrollArea>
  </SelectGroup>
</SelectContent>

</Select>
<Select>
<SelectTrigger className="w-[180px]">
  <SelectValue placeholder="Day" />
</SelectTrigger>

<SelectContent>
  <SelectGroup>
    <SelectLabel>Day</SelectLabel>
    <ScrollArea className="h-72 W-full  rounded-md ">
      <div className="p-4">
    {days.map((day) => (
      <SelectItem key={day} value={day}>
        {day}
      </SelectItem>
    ))}
</div>
    </ScrollArea>
  </SelectGroup>
</SelectContent>

</Select>
<Select>
<SelectTrigger className="w-[180px]">
  <SelectValue placeholder="Year" />
</SelectTrigger>

<SelectContent>
  <SelectGroup>
    <SelectLabel>Year</SelectLabel>
    <ScrollArea className="h-72 w-full  rounded-md ">
      <div className="p-4">
    {years.map((year) => (
      <SelectItem key={year} value={year}>
        {year}
      </SelectItem>
    ))}
</div>
    </ScrollArea>
  </SelectGroup>
</SelectContent>

</Select>


    </div>

  )
}
