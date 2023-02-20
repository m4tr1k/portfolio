import styles from "../styles/components/Menu.module.css";

type Props = {
  showMenu: boolean;
};

const Menu = (props: Props) => {
  const menuList = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div
      className={`${styles.menu} ${props.showMenu ? styles.open : undefined}`}
    >
      {menuList.map((item, index) => {
        return (
          <a key={"item-" + index} href={item.url}>
            <span>0{index + 1}</span> {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default Menu;
