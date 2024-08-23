"use client";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import {
  type TNotOkResponse,
  type TOkResponse,
  type TPostAgentRequest,
} from "~/api";
import { useState } from "react";
import { type ZodIssue } from "zod";

type JoinDialogContentProps<T> = {
  isStory?: boolean;
  formState: TOkResponse<T> | TNotOkResponse;
  formValues?: TPostAgentRequest;
};

export function JoinDialogContent<T>(props: JoinDialogContentProps<T>) {
  const [formValues, setFormValues] = useState(
    props.formValues ?? {
      symbol: "",
      faction: "COSMIC",
    },
  );
  return (
    <div className="flex flex-col gap-4" data-testid="join-dialog-content">
      <FormItem htmlFor="symbol" label="Agent Name" formState={props.formState}>
        <InputText
          id="symbol"
          name="symbol"
          data-testid="agent-name"
          value={formValues.symbol}
          onChange={(e) =>
            setFormValues({ ...formValues, symbol: e.target.value })
          }
          placeholder="Agent Name"
        />
      </FormItem>
      <FormItem
        htmlFor="faction"
        label="Agent Faction"
        formState={props.formState}
      >
        <Dropdown
          id="faction"
          name="faction"
          data-testid="agent-faction"
          value={formValues.faction}
          onChange={(e) =>
            setFormValues({ ...formValues, faction: `${e.value}` })
          }
          options={["COSMIC", "TECH", "MAGIC", "NATURE", "MUTANT"]}
          placeholder="Select a Faction"
          className="min-w-full"
          appendTo={props.isStory ? "self" : undefined}
        />
      </FormItem>
    </div>
  );
}

function FormItem<T>(props: {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  formState: TOkResponse<T> | TNotOkResponse;
}) {
  return (
    <span className="flex w-full flex-col gap-1 sm:gap-2">
      <label className="ml-2 italic" htmlFor={props.htmlFor}>
        {props.label}
      </label>
      {props.children}
      <small
        className={`ml-2 font-thin italic ${props.formState?.success ? "text-green-500" : "text-red-500"} min-h-1 min-w-1`}
      >
        {props.formState?.success
          ? ""
          : formItemError(props.formState, props.htmlFor)}
        {""}
      </small>
    </span>
  );
}

/**
 * Extracts the error message for a specific field from the form state
 * Note: We should move this to a shared utility file if we need to reuse it for other forms
 * @param formState
 * @param fieldName
 */
function formItemError(formState: TNotOkResponse, fieldName: string) {
  if (!formState.error) return "";

  const errorString = formState.error.replace("Invalid form data: ", "").trim();
  const errorObject = JSON.parse(errorString) as ZodIssue[];

  return (
    errorObject.find((error) => error.path.includes(fieldName))?.message ?? ""
  );
}
