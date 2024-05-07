'use client'
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import { useState } from 'react';

type Props = {
  mode?: boolean
}

export default function ContactForm({ mode }: Props) {
  const [status, setStatus] = useState<string>('');
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

  const onSubmit = (data: unknown) => {
    console.log(data);
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <h2 className={styles.successTitle}>Спасибо,<br /> мы сважемся<br /> с вами!</h2>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <h2 className={styles.title}>Связаться с нами</h2>
      <p className={styles.text}>Заполните форму ниже, оставьте заявку и мы свяжемся с вами<br /> в ближайшее время</p>
      <div className={styles.row}>
        <div className={styles.inputBox}>
          <label htmlFor="name">Имя</label>
          <input
            placeholder='Введите ваше имя'
            type="text"
            id="name"
            {...register('name', {
              required: 'Это поле обязательно к заполнению'
            })}
          />
          {
            errors?.name &&
            <span className={styles.error}>
              {`${errors?.name?.message}`}
            </span>
          }
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="mail">Email</label>
          <input
            placeholder='Введите ваш Email'
            type="email"
            id="mail"
            {...register('email', {
              required: 'Это поле обязательно к заполнению'
            })}
          />
          {
            errors?.email &&
            <span className={styles.error}>
              {`${errors?.email?.message}`}
            </span>
          }
        </div>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="description">Комментарий</label>
        <textarea
          placeholder='Ваш комментарий'
          id="description"
          {...register('description', {
            maxLength: {
              value: 250,
              message: 'Максимальное число символов - 250'
            }
          })}
        />
        {
          errors?.description &&
          <span className={styles.error}>
            {`${errors?.description?.message}`}
          </span>
        }
      </div>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          id="iAgree"
          {...register('iAgree', {
            required: 'Примите соглашение для отправки формы'
          })} />
        {
          errors?.iAgree &&
          <span className={styles.error}>
            {`${errors?.iAgree?.message}`}
          </span>
        }
        <label htmlFor="iAgree">Я принимаю</label>
      </div>
      <div className={styles.inputBox}>
        {mode ? <button data-color="white" className={styles.btn} type="submit">Отправить</button> : <button className={styles.btn} type="submit">Отправить</button>}
      </div>
    </form>
  )
}