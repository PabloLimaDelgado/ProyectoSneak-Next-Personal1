import { useMutation } from "@tanstack/react-query";
import { form } from "framer-motion/client";
import { toast } from "react-toastify";

export default function useCrudMutations<T>({
  createEntity,
  onSuccessCreate,
  onErrorCreate,
}: {
  createEntity?: (formData: T) => Promise<T>;
  onSuccessCreate?: (newData: T) => void;
  onErrorCreate?: (error: Error) => void;
}) {
  const createMutation = useMutation({
    mutationFn: (formData: T) =>
      createEntity ? createEntity(formData) : Promise.resolve(formData),
    onSuccess: (data) => {
      if (onSuccessCreate) {
        onSuccessCreate(data);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
      onErrorCreate?.(error);
    },
  });

  return {
    createMutation,
  };
}
