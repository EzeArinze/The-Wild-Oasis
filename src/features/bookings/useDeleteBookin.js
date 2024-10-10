import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBookin() {
  const queryClient = useQueryClient();
  const { mutate: deleteBookin, isLoading: isDeletingBookin } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Booking has been deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("Faild to delete booking");
    },
  });

  return { deleteBookin, isDeletingBookin };
}
