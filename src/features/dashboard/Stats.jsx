import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCash,
  HiOutlineChartBar,
} from "react-icons/hi";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, cabins, numDays }) {
  //1.
  const numBooking = bookings.length;

  //2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3.
  const checkin = confirmedStays.length;

  //4.
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (cabins * numDays);

  return (
    <>
      <Stat
        title={"Bookings"}
        value={numBooking}
        icon={<HiOutlineBriefcase />}
        color={"blue"}
      />
      <Stat
        title={"Sales"}
        value={formatCurrency(sales)}
        icon={<HiOutlineCash />}
        color={"green"}
      />
      <Stat
        title={"Check-In"}
        value={checkin}
        icon={<HiOutlineCalendar />}
        color={"indigo"}
      />
      <Stat
        title={"Occupancy Rate"}
        value={Math.round(occupancy * 100) + "%"}
        icon={<HiOutlineChartBar />}
        color={"yellow"}
      />
    </>
  );
}

export default Stats;
