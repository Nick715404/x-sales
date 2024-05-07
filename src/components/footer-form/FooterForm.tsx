import styles from './FooterForm.module.scss';

import ContactForm from '../form/ContactForm';

export default function FooterForm() {
  return (
    <div className={styles.form}>
      <ContactForm />
      <picture>
        <source
          srcSet='/png/form-contact-girl-786.png'
          media="(max-width: 786px)" />
        <source
          srcSet='/png/form-contact-girl-1024.png'
          media="(max-width: 1024px)" />
        <img
          className={styles.img}
          src="/png/form-contact-bg.png"
          alt='Свяжитесь с 30XSales' />
      </picture>

    </div>
  )
}