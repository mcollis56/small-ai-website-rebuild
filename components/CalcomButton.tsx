'use client';
import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

export default function CalcomButton({
  buttonText,
  buttonClass
}: {
  buttonText: string,
  buttonClass?: string
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <button 
      data-cal-namespace="30min"
      data-cal-link="markcollis/30min"
      data-cal-config='{"layout":"month_view"}'
      className={buttonClass || "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"}
    >
      {buttonText}
    </button>
  );
}
