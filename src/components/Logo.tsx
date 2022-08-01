import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <section className="flex mb-8 items-end">
      <img src="./img/logo-cook.png" alt="logo-dr-cook" className="w-36" />
      <span
        className={`text-[3.2rem] italic font-semibold text-red-800 drop-shadow-lg shadow-black ml-2 ${styles.logo__text}`}
      >
        Dr. Cook
      </span>
    </section>
  );
};

export default Logo;
