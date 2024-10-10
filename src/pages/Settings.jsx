import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpadateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpadateSettingsForm />
    </Row>
  );
}

export default Settings;
