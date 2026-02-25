"use client";
import { useState } from "react";
import Link from "next/link";

export default function AcceptTerms() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-xl border">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="accent-blue-600"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        I agree to the{" "}
        <Link href="/terms-and-conditions" className="text-blue-600 underline hover:text-blue-700">
          Terms and Conditions
        </Link>
      </label>

      <button
        type="button"
        disabled={!checked}
        onClick={() => { if (checked) window.location.href = "/contact"; }}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 hover:bg-blue-700 transition"
      >
        Continue
      </button>
    </div>
  );
}
