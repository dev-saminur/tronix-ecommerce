import React from "react";
import { Poppins } from "next/font/google";

// Import Poppins font (optional)
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Badge = ({ badge, title, discount, alone = false }) => {
  const getBadgeClass = () => {
    if (title?.toLowerCase() === "new") {
      return alone ? "badge-new" : "badge-shared"; // Red background for "New" with fixed size
    } else if (title?.toLowerCase() === "stock out") {
      return "badge-stock-out"; // Black background for "Stock Out" with padding
    } else if (discount) {
      return "badge-discount"; // Green background for discounts with padding
    }
    return "badge-default"; // Default background if nothing matches
  };

  // Dynamic badge text: If discount is provided, show X% Off, else show title
  const badgeText = discount ? `${discount}% Off` : title;
  return (
    <>
      {badge && (
        <button
          className={`${poppins.className} badge ${getBadgeClass()}`} // Apply dynamic class and font
        >
          {badgeText} {/* Display dynamic text */}
        </button>
      )}
    </>
  );
};

export default Badge;
