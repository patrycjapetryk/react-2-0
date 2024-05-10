import { useState } from "react";
import { FormStepOne } from "./FormStepOne";
import { FormStepTwo } from "./FormStepTwo";
import { FormSummary } from "./FormSummary/FormSummary";

import { type FormData as StepOneFormData } from "./FormStepOne/types";
import { type FormData as StepTwoFormData } from "./FormStepTwo/types";

export type AllFormsData = StepOneFormData & StepTwoFormData;

const currentDate = new Date().toJSON().slice(0, 10);

const initialData = {
  name: "",
  surname: "",
  date: currentDate,
  hobby: "",
};

export function FormWizard() {
  const [step, setStep] = useState(1);
  const [formsData, setFormsData] = useState<AllFormsData>(initialData);

  const nextForm = () => {
    if (step < 3) setStep((step) => step + 1);
  };

  const prevForm = () => {
    if (step > 0) setStep((step) => step - 1);
  };

  const addData = (newData: StepOneFormData | StepTwoFormData) => {
    setFormsData({ ...formsData, ...newData });
  };

  if (step === 1) {
    return (
      <FormStepOne
        nextForm={nextForm}
        addData={addData}
        formsData={formsData}
      />
    );
  } else if (step === 2) {
    return (
      <FormStepTwo
        prevForm={prevForm}
        nextForm={nextForm}
        addData={addData}
        formsData={formsData}
      />
    );
  } else if (step === 3) {
    return <FormSummary prevForm={prevForm} formsData={formsData} />;
  } else {
    return "";
  }
}
