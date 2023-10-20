import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fERldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/codeslucas.png" />
        <strong>Lucas Castro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
