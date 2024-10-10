import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

// export function useUpdateUser() {
//   const QueryClient = useQueryClient();

//   const { mutate: updateUser, isLoading: isUpdating } = useMutation({
//     mutationFn: UpdateCurrentUser,
//     onSuccess: () => {
//       toast.success("User data updated successfully");
//       QueryClient.invalidateQueries({ queryKey: ["user"] });
//     },
//     onError: (err) => {
//       toast.error(err.message);
//     },
//   });

//   return { updateUser, isUpdating };
// }

export function useUpdateUser() {
  const QueryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User data updated successfully");
      QueryClient.setQueryData(["user"], user);
      // QueryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
}
