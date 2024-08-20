"use client";
import { type TAnnouncements } from "~/api";
import { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

type AnnouncementsProps = {
  /**
   * Announcements data to display.
   */
  data?: TAnnouncements[];
  /**
   * Optional test ID for the component.
   */
  "data-testid"?: string;
};

/**
 * Announcements component.
 * Displays a card with the current announcement and buttons to cycle through announcements.
 */
export function Announcements({
  data,
  "data-testid": dataTestId,
}: AnnouncementsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If there are announcements, display the current announcement as a Card with prev/next buttons
  // to cycle through the announcements.
  // if there are no announcements, display a message that there are no announcements.
  return (
    <div
      className="mx-16 flex flex-row items-center justify-center gap-4"
      data-testid={dataTestId ?? "announcements"}
    >
      <Button
        icon="pi pi-chevron-left -mx-2"
        onClick={() => setCurrentIndex(currentIndex - 1)}
        disabled={!data?.length || currentIndex === 0}
      />
      {data?.length && data[currentIndex] ? (
        <Card
          title={"Announcement: " + data[currentIndex].title}
          subTitle={data[currentIndex].body}
          className="rounded-xl shadow-lg"
        />
      ) : (
        <NoAnnouncements />
      )}
      <Button
        icon="pi pi-chevron-right -mx-2"
        onClick={() => setCurrentIndex(currentIndex + 1)}
        disabled={!data?.length || currentIndex === (data?.length ?? 0) - 1}
      />
    </div>
  );
}

function NoAnnouncements() {
  return (
    <Card
      title="No Announcements"
      subTitle="There are no announcements at this time."
      className="w-full rounded-xl shadow-lg"
    />
  );
}
