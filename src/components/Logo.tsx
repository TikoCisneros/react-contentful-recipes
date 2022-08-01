import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <section className="flex mb-5 items-end justify-center lg:justify-start">
      <img src="./img/logo-cook.png" alt="logo-dr-cook" className="w-[7.5rem]" />
      <span
        className={`text-[3.6rem] italic font-semibold text-red-800 drop-shadow-lg shadow-black ml-2 ${styles.logo__text}`}
      >
        Dr. Cook
      </span>
    </section>
  );
};

export default Logo;
