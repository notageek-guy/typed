"use client";
import { setResult } from "@/redux/features/codeSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useToast } from "@/components/ui/use-toast";

export const useSend = () => {
  const { code } = useAppSelector((state) => state.codes);

  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const {
    language,
    interfacesOnly,
    isUnion,
    typesInPlaceOfInterfaces,
    verifyJson,
  } = useAppSelector((state) => state.option);

  async function send() {
    try {
      const payload = {
        code,
        language,
        interfacesOnly,
        isUnion,
        typesInPlaceOfInterfaces,
        verifyJson,
      };

      if (
        language ||
        interfacesOnly ||
        isUnion ||
        typesInPlaceOfInterfaces ||
        verifyJson
      ) {
        const response = await fetch("/api/gen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Additional: Specify content type as JSON
          },
          body: JSON.stringify(payload), // Additional: Send the payload in the request body
        });

        if (response.ok) {
          const data = await response.json();
          const result = data.result; // Access the relevant property containing the string value
          dispatch(setResult(result)); // Dispatch the result as a string
          toast({ description: "Request sent successfully" });
        } else {
          toast({
            variant: "destructive",
            description: "Failed to send request!",
          });
        }
      } else {
        toast({
          variant: "destructive",
          description: "No conditions met. Request not sent.",
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast({
        variant: "destructive",
        description: "An error occurred while sending the request.",
      });
    }
  }

  return send;
};
