import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{
  item: HeaderItem;
  closeMenu?: () => void;
}> = ({ item, closeMenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setSubmenuOpen((open) => !open);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSubmenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : closeMenu}
        className="flex items-center justify-between w-full py-2 text-muted focus:outline-none"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-primary text-xl"
            aria-label="Cerrar submenu"
            type="button"
          >
            ✕
          </button>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-gray-500 hover:bg-gray-200"
              onClick={() => {
                setSubmenuOpen(false);
                closeMenu && closeMenu();
              }}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
