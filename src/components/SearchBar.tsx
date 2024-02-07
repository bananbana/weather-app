import React, { useState } from "react";
import Search from "../icons/Search";
import { Button, TextField } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface SearchBarProps {
  setLocation: (args: string) => void;
  searchLocation: () => void;
  invalidInput: boolean;
}

const SearchBar = ({
  setLocation,
  searchLocation,
  invalidInput,
}: SearchBarProps) => {
  return (
    <div className="flex flex-col w-full">
      <TextField.Root radius="medium" size="3" className="w-full p-2 h-fit">
        <TextField.Slot>
          <Search className="w-5 h-5" />
        </TextField.Slot>
        <TextField.Input
          placeholder="Select your city..."
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchLocation();
          }}
        />
        <TextField.Slot>
          <Button
            variant="outline"
            color="gray"
            onClick={() => searchLocation()}
          >
            <ArrowRightIcon width="16" height="16" />
          </Button>
        </TextField.Slot>
      </TextField.Root>

      {invalidInput && <p className="text-red-500">No city found</p>}
    </div>
  );
};

export default SearchBar;
