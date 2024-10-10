import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add to cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, SetIsOpenModal] = useState(false);

//   return (
//     <>
//       <Button onClick={() => SetIsOpenModal((show) => !show)}>Show Form</Button>
//       {isOpenModal && (
//         <Modal onClose={() => SetIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => SetIsOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabin;
