export type NavItem = {
    _id: number;
    name: string;
    icon: string;
    href: string;
    children?: NavItem[];
    target?: string;
  };
  
  const navList: NavItem[] = [
    {
      _id: 1,
      name: "Dashboard",
      icon: "bi bi-grid",
      href: "/",
    },
    {
      _id: 2,
      name: "Documents",
      icon: "bi bi-menu-button-wide",
      href: "#",
      target: "components-nav",
      children: [
        { _id: 1, name: "Customers", icon: "bi bi-circle", href: "#" },
        { _id: 2, name: "Suppliers", icon: "bi bi-circle", href: "#" },
        { _id: 3, name: "Logistics", icon: "bi bi-circle", href: "#" },
      ],
    },
    {
      _id: 3,
      name: "Forms",
      icon: "bi bi-menu-button-wide",
      target: "forms-nav",
      href: "#",
      children: [
        { _id: 1, name: "Application Form", icon: "bi bi-circle", href: "#" },
        { _id: 2, name: "Release Form", icon: "bi bi-circle", href: "#" },
        { _id: 3, name: "Cancellation Form", icon: "bi bi-circle", href: "#" },
      ],
    },
    {
      _id: 4,
      name: "Profile",
      icon: "bi bi-person",
      href: "#",
    },
    {
      _id: 5,
      name: "Contact",
      icon: "bi bi-envelope",
      href: "#",
    },
    {
      _id: 6,
      name: "Register",
      icon: "bi bi-card-list",
      href: "#",
    },
    {
      _id: 7,
      name: "Login",
      icon: "bi bi-box-arrow-in-right",
      href: "#",
    },
    {
      _id: 8,
      name: "Setting",
      icon: "bi bi-gear",
      href: "#",
    },
    {
      _id: 9,
      name: "F.A.Q",
      icon: "bi bi-question-circle",
      href: "#",
    },
    {
      _id: 10,
      name: "Blank",
      icon: "bi bi-file-earmark",
      href: "#",
    },
  ];
  
  export default navList;
  