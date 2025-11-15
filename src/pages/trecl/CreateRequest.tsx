import { Form } from "@canonical/react-components";
import BaseLayout from "components/BaseLayout";
import { useFormik } from "formik";

interface CreateRequestFormValues {
  user: string;
  requestType: string;
  content: string;
}

export default function CreateRequest() {
  const formik = useFormik<CreateRequestFormValues>({
    initialValues: {
      user: "",
      requestType: "",
      content: "",
    },
    onSubmit: () => {},
  });

  return (
    <BaseLayout title="Register Resource">
      <Form onSubmit={formik.handleSubmit} className="form"></Form>
    </BaseLayout>
  );
}
