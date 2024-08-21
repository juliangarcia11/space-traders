"use client";
import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

type JoinDialogContentProps = {
  isStory?: boolean;
  formValues?: {
    agentName: string;
    agentFaction: string;
  };
  formState?: {
    success: boolean;
    message: string;
  };
};

export function JoinDialogContent(props: JoinDialogContentProps) {
  const [formValues, setFormValues] = useState<
    NonNullable<JoinDialogContentProps["formValues"]>
  >(props.formValues ?? { agentName: "", agentFaction: "" });

  return (
    <div className="flex flex-col gap-4" data-testid="join-dialog-content">
      <FormItem
        htmlFor="agent-name"
        label="Agent Name"
        formState={props.formState}
      >
        <InputText
          id="agent-name"
          data-testid="agent-name"
          value={formValues.agentName}
          onChange={(e) =>
            setFormValues({ ...formValues, agentName: e.target.value })
          }
          placeholder="Agent Name"
        />
      </FormItem>
      <FormItem
        htmlFor="agent-faction"
        label="Agent Faction"
        formState={props.formState}
      >
        <Dropdown
          id="agent-faction"
          data-testid="agent-faction"
          value={formValues.agentFaction}
          onChange={(e) =>
            setFormValues({ ...formValues, agentFaction: `${e.value}` })
          }
          options={["COSMIC", "TECH", "MAGIC", "NATURE", "MUTANT"]}
          placeholder="Select a Faction"
          className="w-full"
          appendTo={props.isStory ? "self" : undefined}
        />
      </FormItem>
    </div>
  );
}

function FormItem(props: {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  formState?: { success: boolean; message: string };
}) {
  return (
    <span className="flex flex-col gap-1 sm:gap-2">
      <label className="ml-2 italic" htmlFor={props.htmlFor}>
        {props.label}
      </label>
      {props.children}
      <small
        className={`ml-2 font-thin italic ${props.formState?.success ? "text-green-500" : "text-red-500"} min-h-1 min-w-1`}
      >
        {props.formState?.message}
        {""}
      </small>
    </span>
  );
}
