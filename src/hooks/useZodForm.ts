import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { ZodType, ZodTypeAny } from "zod/v4";

export function useZodForm<T extends FieldValues>(
  schema: ZodTypeAny,
  defaultValues: T
) {
  return useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });
}