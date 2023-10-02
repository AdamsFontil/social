import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollAreaDemo } from "./ScrollTest";

export function SignUp() {
  // Generate arrays for months, days, and years
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2023 - i).toString()); // Change 2023 to the current year

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-3xl bg-sky-500 text-white">
          Create an account
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full text-2xl flex flex-col">
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="name" id="name" placeholder="Name" normal />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" normal />
          </div>

          <div className="flex flex-col w-full gap-1.5">
            <h4>Date of Birth</h4>
            <p className="text-xs">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div className="flex gap-4 w-full">
              <Select>
                <SelectTrigger className="w-[360px]">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-green-500 overflow-y-auto h-72">
                    <ScrollArea className="h-72">
                    <div className="p-4">
                    <SelectLabel>Month</SelectLabel>
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
                    <ScrollArea className="h-72 bg-pink-400">
                    {days.map((day) => (
                      <SelectItem key={day} value={day}>
                        {day}
                      </SelectItem>
                    ))}
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
                    <ScrollArea className="h-72">
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
            <div className="grid w-full -sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                normal
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Account</Button>
        </DialogFooter>
      </DialogContent>
      <ScrollAreaDemo />
    </Dialog>
  );
}

export default SignUp;
