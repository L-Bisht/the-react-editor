import NavItem from "./NavItem";
import { useNav } from "@app/context";

const SideBar = () => {
  const {
    navItems = [],
    selectedNavItemId = false,
    setSelectedNavItemId,
  } = useNav();
  return (
    <nav className="h-full border-x-2 border-x-gray-200">
      <ul className="flex flex-col">
        {navItems.map(({ id, title, icon }) => (
          <NavItem
            key={id}
            id={id}
            title={title}
            isActive={selectedNavItemId === id}
            icon={icon}
            onClick={(id) => setSelectedNavItemId?.(id)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
