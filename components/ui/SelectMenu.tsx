import * as React from "react"
 
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select"
 
export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pages</SelectLabel>
          <SelectItem value="Home">Apple</SelectItem>
          <SelectItem value="Blog">Banana</SelectItem>
          <SelectItem value="Certificates">Blueberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}