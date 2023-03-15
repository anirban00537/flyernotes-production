import styles from "./loader.module.css";

function Loading() {
  return (
    <div className={`${styles.loading_container}`}>
      <div className={`${styles.lds_facebook} `}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
