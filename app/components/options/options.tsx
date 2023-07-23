"use client";
import React, { useState } from "react";
import { Settings } from "lucide-react";
import { getMimeType, languageNames, namingCase } from "@/constants/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { extensions } from "@/constants/data";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  changeCase,
  changeLang,
  toggleInterface,
  toggleJson,
  toggleTypes,
  toggleUnion,
} from "@/redux/features/optionsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCopy } from "@/hooks/useCopy";
async function wait(time: number): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );
}

import { useSend } from "@/hooks/useSend";
function Options() {
  const [open, setOpen] = useState(false);
  const send = useSend();
  const { toast } = useToast();
  const [_, setCopy] = useCopy();
  const [isSaving, setIsSaving] = useState(false);
  const { language } = useAppSelector((state) => state.option);
  const handleOpen = () => setOpen((prev) => !prev);
  const { result } = useAppSelector((state) => state.codes);
  const handleDownloadBasedOnExtension = async () => {
    try {
      if (!result || result.length === 0) {
        toast({ description: "Nothing here to be downloaded! 😢" });
        return;
      }
      const extracted = extensions[language] || ".ts";
      const mimeType = getMimeType(language);
      const blob = new Blob([result], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.setAttribute("download", `data${extracted}`);
      downloadLink.href = url;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
    } catch (error: unknown) {
      console.log(error);
      console.log(error);
    }
  };

  const handleSave = async () => {
    if (result.length === 0) {
      toast({
        description: "No text found sorry",
      });
    } else {
      setCopy(result);
      await wait(300);
      toast({
        description: "Copied Successfully ",
      });
    }
  };

  const handleSend = async () => {
    try {
      setIsSaving(true);
      await send();
      setIsSaving(false);
    } catch (error) {
      console.error("Error occurred during sending:", error);
      setIsSaving(false);
    }
  };

  const { interfacesOnly, isUnion, verifyJson, typesInPlaceOfInterfaces } =
    useAppSelector((state) => state.option);
  const dispatch = useAppDispatch();
  return (
    <div className="p-2 relative z-30">
      <button onClick={handleOpen}>
        <Settings className="text-white" />
      </button>
      {open && (
        <div className="absolute right-0 z-45 mt-2 transition-opacity duration-300 opacity-100">
          <Tabs
            defaultValue="language"
            className="w-[250px] sm:w-[300px] md:w-[400px] bg-white shadow-md rounded-md"
          >
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-t-md">
              <TabsTrigger
                value="language"
                className="py-2 text-center cursor-pointer"
              >
                Language
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className="py-2 text-center cursor-pointer"
              >
                Other
              </TabsTrigger>
            </TabsList>
            <TabsContent value="language" className="p-4">
              <Card>
                <CardHeader>
                  <Select
                    onValueChange={(data) => {
                      dispatch(changeLang(data));
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Languages</SelectLabel>

                        {languageNames.map((data, index) => (
                          <SelectItem key={data.value} value={data.value}>
                            {data.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={interfacesOnly}
                        onCheckedChange={(_) => dispatch(toggleInterface())}
                        id="interfaces"
                      />
                      <Label htmlFor="interfaces">Interfaces Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={verifyJson}
                        onCheckedChange={(_) => dispatch(toggleJson())}
                        id="verify-json"
                      />
                      <Label htmlFor="verify-json">
                        Explicitly name unions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={isUnion}
                        onCheckedChange={(_) => dispatch(toggleUnion())}
                        id="enum"
                      />
                      <Label htmlFor="enum">
                        Use union type instead of enums
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={typesInPlaceOfInterfaces}
                        onCheckedChange={(_) => dispatch(toggleTypes())}
                        id="types"
                      />
                      <Label htmlFor="types">
                        Use types instead of interfaces
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSave}>copy code</Button>
                  <Button
                    className={`ml-2 ${
                      isSaving ? "cursor-not-allowed opacity-25" : ""
                    }`}
                    onClick={handleSend}
                    disabled={isSaving}
                  >
                    {isSaving ? "Sending..." : "Send"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="other" className="p-4">
              <Card>
                <CardHeader>
                  <Label className="text-start" htmlFor="naming">
                    Acronym naming style
                  </Label>
                  <Select
                    onValueChange={(data) => {
                      dispatch(changeCase(data));
                    }}
                  >
                    <SelectTrigger id="naming" className="w-full">
                      <SelectValue placeholder="Select a case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Naming</SelectLabel>
                        {namingCase.map((data) => (
                          <SelectItem key={data.value} value={data.value}>
                            {data.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardFooter>
                  <Button onClick={handleDownloadBasedOnExtension}>
                    Download
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Options;
