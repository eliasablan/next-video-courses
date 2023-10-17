import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <p className={`mt-10 text-xs text-center ${styles.footer}`}>
      This application was created by{' '}
      <a href="https://github.com/eliasablan" target="_blank">
        <span className="font-medium underline hover:no-underline">
          Elias Ablan
        </span>
      </a>
    </p>
  );
};

export default Footer;
